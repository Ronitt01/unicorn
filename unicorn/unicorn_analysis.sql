-- Comprehensive SQL Query for Unicorn Companies Analysis

-- Create views for better organization and reusability
CREATE OR REPLACE VIEW company_base_info AS
SELECT 
    c.company_id,
    c.company_name,
    c.industry,
    c.founded_date,
    c.unicorn_date,
    c.valuation_billion,
    EXTRACT(YEAR FROM c.unicorn_date) as unicorn_year
FROM companies c;

-- Create view for industry pattern matching
CREATE OR REPLACE VIEW industry_patterns AS
SELECT 
    industry,
    CASE 
        WHEN industry LIKE '%tech%' OR industry LIKE '%software%' THEN 'Technology'
        WHEN industry LIKE '%fin%' THEN 'Fintech'
        WHEN industry LIKE '%health%' OR industry LIKE '%bio%' THEN 'Healthcare'
        ELSE industry
    END as industry_category
FROM company_base_info
GROUP BY industry;

-- Main query using CTEs for organization
WITH 
-- CTE for calculating industry metrics with pattern matching
industry_metrics AS (
    SELECT 
        i.industry_category as industry,
        COUNT(*) as total_unicorns,
        AVG(c.valuation_billion) as avg_valuation,
        MAX(c.valuation_billion) as max_valuation,
        MIN(c.valuation_billion) as min_valuation,
        RANK() OVER (ORDER BY COUNT(*) DESC) as industry_rank
    FROM company_base_info c
    JOIN industry_patterns i ON c.industry = i.industry
    GROUP BY i.industry_category
),

-- CTE for yearly statistics per industry with running totals
yearly_stats AS (
    SELECT 
        i.industry_category as industry,
        c.unicorn_year,
        COUNT(*) as yearly_unicorn_count,
        ROUND(AVG(c.valuation_billion), 2) as yearly_avg_valuation,
        SUM(COUNT(*)) OVER (
            PARTITION BY i.industry_category 
            ORDER BY c.unicorn_year
        ) as running_total,
        AVG(c.valuation_billion) OVER (
            PARTITION BY i.industry_category 
            ORDER BY c.unicorn_year
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) as running_avg_valuation
    FROM company_base_info c
    JOIN industry_patterns i ON c.industry = i.industry
    GROUP BY i.industry_category, c.unicorn_year
),

-- CTE for high-growth classification and valuation trends
high_growth AS (
    SELECT 
        c.*,
        i.industry_category,
        CASE 
            WHEN c.valuation_billion >= 10 THEN 'Super Unicorn'
            WHEN c.valuation_billion >= 5 THEN 'Elite Unicorn'
            WHEN c.valuation_billion >= 2 THEN 'Premium Unicorn'
            ELSE 'Unicorn'
        END as growth_category,
        LAG(c.valuation_billion) OVER (
            PARTITION BY i.industry_category 
            ORDER BY c.unicorn_date
        ) as prev_valuation
    FROM company_base_info c
    JOIN industry_patterns i ON c.industry = i.industry
)

-- Final query combining all CTEs with detailed metrics
SELECT 
    ys.industry,
    ys.unicorn_year as "Year",
    ys.yearly_unicorn_count as "New Unicorns",
    ys.yearly_avg_valuation as "Average Valuation ($B)",
    ys.running_total as "Cumulative Count",
    ROUND(ys.running_avg_valuation, 2) as "Running Avg Valuation ($B)",
    im.total_unicorns as "Total Industry Unicorns",
    ROUND(im.avg_valuation, 2) as "Industry Average Valuation ($B)",
    ROUND(im.max_valuation, 2) as "Highest Valuation ($B)",
    (
        SELECT COUNT(*)
        FROM high_growth hg
        WHERE hg.industry_category = ys.industry
        AND hg.growth_category = 'Super Unicorn'
    ) as "Super Unicorn Count"
FROM yearly_stats ys
INNER JOIN industry_metrics im ON ys.industry = im.industry
WHERE im.industry_rank <= 3  -- Get only top 3 industries
ORDER BY 
    im.industry_rank,
    ys.unicorn_year;