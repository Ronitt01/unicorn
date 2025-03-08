// Unicorn Companies Analysis Dashboard - Main Application Script

// Sample data for development - would be replaced with actual API data in production
const sampleData = {
    companies: [
        { id: 1, name: "ByteDance", industry: "Technology", founded_date: "2012-03-15", unicorn_date: "2017-04-07", valuation_billion: 140, country: "China", lat: 39.9042, lng: 116.4074 },
        { id: 2, name: "Stripe", industry: "Fintech", founded_date: "2010-09-14", unicorn_date: "2014-01-23", valuation_billion: 95, country: "United States", lat: 37.7749, lng: -122.4194 },
        { id: 3, name: "SpaceX", industry: "Technology", founded_date: "2002-05-06", unicorn_date: "2012-12-01", valuation_billion: 74, country: "United States", lat: 33.9207, lng: -118.3278 },
        { id: 4, name: "Instacart", industry: "Technology", founded_date: "2012-07-01", unicorn_date: "2015-01-12", valuation_billion: 39, country: "United States", lat: 37.7749, lng: -122.4194 },
        { id: 5, name: "Epic Games", industry: "Technology", founded_date: "1991-01-15", unicorn_date: "2018-10-26", valuation_billion: 31.5, country: "United States", lat: 35.7796, lng: -78.6382 },
        { id: 6, name: "Revolut", industry: "Fintech", founded_date: "2015-07-01", unicorn_date: "2018-04-26", valuation_billion: 33, country: "United Kingdom", lat: 51.5074, lng: -0.1278 },
        { id: 7, name: "Moderna", industry: "Healthcare", founded_date: "2010-09-01", unicorn_date: "2015-12-21", valuation_billion: 18.5, country: "United States", lat: 42.3601, lng: -71.0589 },
        { id: 8, name: "Databricks", industry: "Technology", founded_date: "2013-10-01", unicorn_date: "2019-02-05", valuation_billion: 28, country: "United States", lat: 37.7749, lng: -122.4194 },
        { id: 9, name: "Nubank", industry: "Fintech", founded_date: "2013-05-01", unicorn_date: "2018-03-01", valuation_billion: 25, country: "Brazil", lat: -23.5505, lng: -46.6333 },
        { id: 10, name: "Klarna", industry: "Fintech", founded_date: "2005-01-01", unicorn_date: "2011-12-12", valuation_billion: 45.6, country: "Sweden", lat: 59.3293, lng: 18.0686 },
        { id: 11, name: "Canva", industry: "Technology", founded_date: "2012-01-01", unicorn_date: "2018-01-08", valuation_billion: 40, country: "Australia", lat: -33.8688, lng: 151.2093 },
        { id: 12, name: "Ripple", industry: "Fintech", founded_date: "2012-09-01", unicorn_date: "2015-10-06", valuation_billion: 10, country: "United States", lat: 37.7749, lng: -122.4194 },
        { id: 13, name: "Tempus", industry: "Healthcare", founded_date: "2015-01-01", unicorn_date: "2018-03-21", valuation_billion: 8.1, country: "United States", lat: 41.8781, lng: -87.6298 },
        { id: 14, name: "Devoted Health", industry: "Healthcare", founded_date: "2017-03-01", unicorn_date: "2018-10-16", valuation_billion: 12.6, country: "United States", lat: 26.3683, lng: -80.1289 },
        { id: 15, name: "Grab", industry: "Technology", founded_date: "2012-06-01", unicorn_date: "2014-12-04", valuation_billion: 14, country: "Singapore", lat: 1.3521, lng: 103.8198 },
    ],
    yearlyStats: [
        { year: 2010, count: 1, avg_valuation: 2.1 },
        { year: 2011, count: 2, avg_valuation: 2.5 },
        { year: 2012, count: 3, avg_valuation: 3.2 },
        { year: 2013, count: 5, avg_valuation: 3.8 },
        { year: 2014, count: 8, avg_valuation: 4.3 },
        { year: 2015, count: 12, avg_valuation: 5.1 },
        { year: 2016, count: 18, avg_valuation: 5.8 },
        { year: 2017, count: 27, avg_valuation: 6.2 },
        { year: 2018, count: 47, avg_valuation: 7.1 },
        { year: 2019, count: 66, avg_valuation: 8.3 },
        { year: 2020, count: 75, avg_valuation: 9.2 },
        { year: 2021, count: 95, avg_valuation: 10.5 },
        { year: 2022, count: 87, avg_valuation: 11.2 },
    ],
    industryStats: [
        { industry: "Technology", count: 215, avg_valuation: 9.8, growth_rate: 28 },
        { industry: "Fintech", count: 127, avg_valuation: 8.2, growth_rate: 32 },
        { industry: "Healthcare", count: 89, avg_valuation: 7.5, growth_rate: 24 },
        { industry: "E-commerce", count: 56, avg_valuation: 6.3, growth_rate: 22 },
        { industry: "Transportation", count: 42, avg_valuation: 7.8, growth_rate: 18 },
        { industry: "Other", count: 65, avg_valuation: 5.4, growth_rate: 15 },
    ],
    growthCategories: [
        { category: "Unicorn", count: 324, min_valuation: 1, max_valuation: 2 },
        { category: "Premium Unicorn", count: 156, min_valuation: 2, max_valuation: 5 },
        { category: "Elite Unicorn", count: 78, min_valuation: 5, max_valuation: 10 },
        { category: "Super Unicorn", count: 36, min_valuation: 10, max_valuation: 150 },
    ],
    timelineEvents: [
        { company_id: 1, date: "2012-03-15", event: "Company Founded", description: "ByteDance was founded by Zhang Yiming in Beijing" },
        { company_id: 1, date: "2016-09-20", event: "Series D Funding", description: "Raised $1 billion at $10 billion valuation" },
        { company_id: 1, date: "2017-04-07", event: "Unicorn Status", description: "Achieved unicorn status with $11 billion valuation" },
        { company_id: 1, date: "2018-10-26", event: "Series E Funding", description: "Raised $3 billion at $75 billion valuation" },
        { company_id: 1, date: "2021-03-31", event: "Valuation Peak", description: "Reached peak valuation of $140 billion" },
        
        { company_id: 3, date: "2002-05-06", event: "Company Founded", description: "SpaceX was founded by Elon Musk" },
        { company_id: 3, date: "2008-08-04", event: "First Successful Launch", description: "Falcon 1 reaches orbit" },
        { company_id: 3, date: "2012-05-22", event: "ISS Docking", description: "Dragon becomes first commercial spacecraft to dock with ISS" },
        { company_id: 3, date: "2012-12-01", event: "Unicorn Status", description: "Achieved unicorn status with $1.3 billion valuation" },
        { company_id: 3, date: "2020-05-30", event: "First Crewed Flight", description: "First private company to send humans to orbit" },
        { company_id: 3, date: "2022-10-01", event: "Valuation Peak", description: "Reached peak valuation of $74 billion" },
    ]
};

// Global variables
let map;
let charts = {};
let filteredData = {...sampleData};
let currentView = 'yearly';
let currentVizType = 'bubble';
let mapView = 'markers';
let markers = [];
let heatmapLayer;
let markerClusterGroup;

// Initialize the dashboard when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHeroStats();
    initializeFilters();
    initializeSummaryStats();
    initializeCharts();
    initializeInteractiveViz();
    initializeMap();
    initializeTimeline();
    initializeGrowthCalculator();
    addEventListeners();
});

// Initialize hero section stats
function initializeHeroStats() {
    const totalUnicorns = sampleData.companies.length;
    const avgValuation = (sampleData.companies.reduce((sum, company) => sum + company.valuation_billion, 0) / totalUnicorns).toFixed(1);
    const growthRate = ((sampleData.yearlyStats[sampleData.yearlyStats.length - 1].count - 
                        sampleData.yearlyStats[sampleData.yearlyStats.length - 2].count) / 
                        sampleData.yearlyStats[sampleData.yearlyStats.length - 2].count * 100).toFixed(1);
    
    document.getElementById('total-unicorns-hero').textContent = totalUnicorns;
    document.getElementById('avg-valuation-hero').textContent = `$${avgValuation}B`;
    document.getElementById('growth-rate-hero').textContent = `${growthRate}%`;
    
    // Add animation to hero stats
    setTimeout(() => {
        document.querySelectorAll('.hero-stats .stat-card').forEach(card => {
            card.classList.add('bounce-in');
        });
    }, 500);
}

// Initialize filter options
function initializeFilters() {
    // Populate year dropdowns
    const startYearSelect = document.getElementById('start-year');
    const endYearSelect = document.getElementById('end-year');
    const years = sampleData.yearlyStats.map(stat => stat.year);
    
    years.forEach(year => {
        startYearSelect.add(new Option(year, year));
        endYearSelect.add(new Option(year, year));
    });
    
    // Set default values
    startYearSelect.value = Math.min(...years);
    endYearSelect.value = Math.max(...years);
    
    // Populate industry select
    const industrySelect = document.getElementById('industry-select');
    const industries = sampleData.industryStats.map(stat => stat.industry);
    
    industries.forEach(industry => {
        industrySelect.add(new Option(industry, industry));
    });
    
    // Populate calculator industry dropdown
    const calculatorIndustry = document.getElementById('calculator-industry');
    industries.forEach(industry => {
        calculatorIndustry.add(new Option(industry, industry));
    });
    
    // Populate timeline company dropdown
    const timelineCompany = document.getElementById('timeline-company');
    sampleData.companies.forEach(company => {
        timelineCompany.add(new Option(company.name, company.id));
    });
}

// Initialize summary statistics
function initializeSummaryStats() {
    const totalUnicorns = sampleData.companies.length;
    const avgValuation = (sampleData.companies.reduce((sum, company) => sum + company.valuation_billion, 0) / totalUnicorns).toFixed(1);
    const superUnicorns = sampleData.companies.filter(company => company.valuation_billion >= 10).length;
    
    document.getElementById('total-unicorns').textContent = totalUnicorns;
    document.getElementById('avg-valuation').textContent = `$${avgValuation}B`;
    document.getElementById('super-unicorns').textContent = superUnicorns;
}

// Initialize all charts
function initializeCharts() {
    createGrowthTrendChart();
    createIndustryDistributionChart();
    createValuationCategoriesChart();
    createIndustryComparisonChart();
}

// Create growth trend chart
function createGrowthTrendChart() {
    const ctx = document.getElementById('growth-trend-chart').getContext('2d');
    
    const yearlyData = sampleData.yearlyStats.map(stat => stat.count);
    const cumulativeData = sampleData.yearlyStats.map((stat, index, array) => {
        return array.slice(0, index + 1).reduce((sum, item) => sum + item.count, 0);
    });
    
    charts.growthTrend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sampleData.yearlyStats.map(stat => stat.year),
            datasets: [{
                label: 'New Unicorns',
                data: yearlyData,
                backgroundColor: 'rgba(111, 66, 193, 0.2)',
                borderColor: 'rgba(111, 66, 193, 1)',
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: 'rgba(111, 66, 193, 1)',
                hidden: currentView !== 'yearly'
            }, {
                label: 'Cumulative Unicorns',
                data: cumulativeData,
                backgroundColor: 'rgba(32, 201, 151, 0.2)',
                borderColor: 'rgba(32, 201, 151, 1)',
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: 'rgba(32, 201, 151, 1)',
                hidden: currentView !== 'cumulative'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Unicorns'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Create industry distribution chart
function createIndustryDistributionChart() {
    const ctx = document.getElementById('industry-distribution-chart').getContext('2d');
    
    charts.industryDistribution = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: sampleData.industryStats.map(stat => stat.industry),
            datasets: [{
                data: sampleData.industryStats.map(stat => stat.count),
                backgroundColor: [
                    'rgba(111, 66, 193, 0.7)',
                    'rgba(32, 201, 151, 0.7)',
                    'rgba(253, 126, 20, 0.7)',
                    'rgba(220, 53, 69, 0.7)',
                    'rgba(23, 162, 184, 0.7)',
                    'rgba(108, 117, 125, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Create valuation categories chart
function createValuationCategoriesChart() {
    const ctx = document.getElementById('valuation-categories-chart').getContext('2d');
    
    charts.valuationCategories = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sampleData.growthCategories.map(cat => cat.category),
            datasets: [{
                label: 'Number of Companies',
                data: sampleData.growthCategories.map(cat => cat.count),
                backgroundColor: [
                    'rgba(108, 117, 125, 0.7)',
                    'rgba(23, 162, 184, 0.7)',
                    'rgba(32, 201, 151, 0.7)',
                    'rgba(253, 126, 20, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Companies'
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Create industry comparison chart
function createIndustryComparisonChart() {
    const ctx = document.getElementById('industry-comparison-chart');
    
    charts.industryComparison = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sampleData.industryStats.map(stat => stat.industry),
            datasets: [{
                label: 'Number of Companies',
                data: sampleData.industryStats.map(stat => stat.count),
                backgroundColor: 'rgba(111, 66, 193, 0.7)',
                borderColor: 'rgba(111, 66, 193, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            }, {
                label: 'Average Valuation ($B)',
                data: sampleData.industryStats.map(stat => stat.avg_valuation),
                backgroundColor: 'rgba(32, 201, 151, 0.7)',
                borderColor: 'rgba(32, 201, 151, 1)',
                borderWidth: 1,
                yAxisID: 'y1'
            }, {
                label: 'Growth Rate (%)',
                data: sampleData.industryStats.map(stat => stat.growth_rate),
                backgroundColor: 'rgba(253, 126, 20, 0.7)',
                borderColor: 'rgba(253, 126, 20, 1)',
                borderWidth: 1,
                yAxisID: 'y2'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Number of Companies'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: 'Average Valuation ($B)'
                    }
                },
                y2: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: 'Growth Rate (%)'
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Initialize interactive visualization
function initializeInteractiveViz() {
    const vizContainer = document.getElementById('interactive-visualization');
    
    // Create bubble chart by default
    createBubbleChart(vizContainer);
    
    // Add event listeners for viz type buttons
    document.querySelectorAll('.viz-controls .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const vizType = this.getAttribute('data-viz');
            currentVizType = vizType;
            
            // Update active button
            document.querySelectorAll('.viz-controls .btn').forEach(b => {
                b.classList.remove('btn-light');
                b.classList.add('btn-outline-light');
            });
            this.classList.remove('btn-outline-light');
            this.classList.add('btn-light');
            
            // Clear container
            vizContainer.innerHTML = '';
            
            // Create selected visualization
            switch(vizType) {
                case 'bubble':
                    createBubbleChart(vizContainer);
                    break;
                case 'scatter':
                    createScatterPlot(vizContainer);
                    break;
                case 'tree':
                    createTreeMap(vizContainer);
                    break;
            }
        });
    });
}

// Create bubble chart visualization
function createBubbleChart(container) {
    // Set up dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    
    // Create SVG
    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Create scales
    const xScale = d3.scaleLinear()
        .domain([2000, 2023])
        .range([margin.left, width - margin.right]);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(sampleData.companies, d => d.valuation_billion) * 1.1])
        .range([height - margin.bottom, margin.top]);
    
    const radiusScale = d3.scaleSqrt()
        .domain([0, d3.max(sampleData.companies, d => d.valuation_billion)])
        .range([5, 50]);
    
    const colorScale = d3.scaleOrdinal()
        .domain(sampleData.industryStats.map(d => d.industry))
        .range(['#6f42c1', '#20c997', '#fd7e14', '#dc3545', '#17a2b8', '#6c757d']);
    
    // Add axes
    svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickFormat(d3.format('d')))
        .append('text')
        .attr('x', width / 2)
        .attr('y', 35)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'middle')
        .text('Founded Year');
    
    svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -35)
        .attr('x', -height / 2)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'middle')
        .text('Valuation ($B)');
    
    // Create tooltip
    const tooltip = d3.select(container)
        .append('div')
        .attr('class', 'custom-tooltip')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('pointer-events', 'none');
    
    // Add bubbles
    const bubbles = svg.selectAll('.bubble')
        .data(sampleData.companies)
        .enter()
        .append('circle')
        .attr('class', 'bubble')
        .attr('cx', d => xScale(new Date(d.founded_date).getFullYear()))
        .attr('cy', d => yScale(d.valuation_billion))
        .attr('r', 0) // Start with radius 0 for animation
        .attr('fill', d => colorScale(d.industry))
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .style('opacity', 0.8)
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(300)
                .attr('stroke-width', 2)
                .style('opacity', 1);
            
            tooltip.transition()
                .duration(300)
                .style('opacity', 1);
            
            tooltip.html(`
                <strong>${d.name}</strong><br/>
                Industry: ${d.industry}<br/>
                Founded: ${new Date(d.founded_date).getFullYear()}<br/>
                Valuation: $${d.valuation_billion}B<br/>
                Country: ${d.country}
            `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function() {
            d3.select(this)
                .transition()
                .duration(300)
                .attr('stroke-width', 1)
                .style('opacity', 0.8);
            
            tooltip.transition()
                .duration(300)
                .style('opacity', 0);
        })
        .on('click', function(event, d) {
            showCompanyDetails(d);
        });
    
    // Add animation
    bubbles.transition()
        .duration(1000)
        .delay((d, i) => i * 50)
        .attr('r', d => radiusScale(d.valuation_billion));
    
    // Add legend
    const legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${width - 120}, ${margin.top})`);
    
    const industries = [...new Set(sampleData.companies.map(d => d.industry))];
    
    industries.forEach((industry, i) => {
        const legendRow = legend.append('g')
            .attr('transform', `translate(0, ${i * 20})`);
        
        legendRow.append('rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', colorScale(industry));
        
        legendRow.append('text')
            .attr('x', 15)
            .attr('y', 10)
            .attr('text-anchor', 'start')
            .style('font-size', '12px')
            .text(industry);
    });
}

// Create scatter plot visualization
function createScatterPlot(container) {
    // Implementation similar to bubble chart but with different axes
    const width = container.clientWidth;
    const height = container.clientHeight;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    
    // Create SVG
    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Create scales
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(sampleData.companies, d => {
            const foundedDate = new Date(d.founded_date);
            const unicornDate = new Date(d.unicorn_date);
            return (unicornDate - foundedDate) / (1000 * 60 * 60 * 24 * 365); // Years to unicorn
        }) * 1.1])
        .range([margin.left, width - margin.right]);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(sampleData.companies, d => d.valuation_billion) * 1.1])
        .range([height - margin.bottom, margin.top]);
    
    const colorScale = d3.scaleOrdinal()
        .domain(sampleData.industryStats.map(d => d.industry))
        .range(['#6f42c1', '#20c997', '#fd7e14', '#dc3545', '#17a2b8', '#6c757d']);
    
    // Add axes
    svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale))
        .append('text')
        .attr('x', width / 2)
        .attr('y', 35)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'middle')
        .text('Years to Unicorn Status');
    
    svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -35)
        .attr('x', -height / 2)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'middle')
        .text('Valuation ($B)');
    
    // Create tooltip
    const tooltip = d3.select(container)
        .append('div')
        .attr('class', 'custom-tooltip')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('pointer-events', 'none');
    
    // Add points
    const points = svg.selectAll('.point')
        .data(sampleData.companies)
        .enter()
        .append('circle')
        .attr('class', 'point')
        .attr('cx', d => {
            const foundedDate = new Date(d.founded_date);
            const unicornDate = new Date(d.unicorn_date);
            return xScale((unicornDate - foundedDate) / (1000 * 60 * 60 * 24 * 365));
        })
        .attr('cy', d => yScale(d.valuation_billion))
        .attr('r', 8)
        .attr('fill', d => colorScale(d.industry))
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .style('opacity', 0)
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(300)
                .attr('r', 12)
                .attr('stroke-width', 2)
                .style('opacity', 1);
            
            tooltip.transition()
                .duration(300)
                .style('opacity', 1);
            
            const foundedDate = new Date(d.founded_date);
            const unicornDate = new Date(d.unicorn_date);
            const yearsToUnicorn = ((unicornDate - foundedDate) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
            
            tooltip.html(`
                <strong>${d.name}</strong><br/>
                Industry: ${d.industry}<br/>
                Founded: ${new Date(d.founded_date).getFullYear()}<br/>
                Years to Unicorn: ${yearsToUnicorn}<br/>
                Valuation: $${d.valuation_billion}B<br/>
                Country: ${d.country}
            `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function() {
            d3.select(this)
                .transition()
                .duration(300)
                .attr('r', 8)
                .attr('stroke-width', 1)
                .style('opacity', 0.8);
            
            tooltip.transition()
                .duration(300)
                .style('opacity', 0);
        })
        .on('click', function(event, d) {
            showCompanyDetails(d);
        });
    
    // Add animation
    points.transition()
        .duration(800)
        .delay((d, i) => i * 30)
        .style('opacity', 0.8);
    
    // Add trend line
    const lineData = [];
    sampleData.companies.forEach(d => {
        const foundedDate = new Date(d.founded_date);
        const unicornDate = new Date(d.unicorn_date);
        const yearsToUnicorn = (unicornDate - foundedDate) / (1000 * 60 * 60 * 24 * 365);
        lineData.push({
            x: yearsToUnicorn,
            y: d.valuation_billion
        });
    });
    
    // Sort by x value for proper line
    lineData.sort((a, b) => a.x - b.x);
    
    // Create line generator
    const line = d3.line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))
        .curve(d3.curveBasis);
    
    // Add trend line
    svg.append('path')
        .datum(lineData)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(111, 66, 193, 0.5)')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5')
        .attr('d', line)
        .style('opacity', 0)
        .transition()
        .duration(1000)
        .style('opacity', 1);
    
    // Add legend
    const legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${width - 120}, ${margin.top})`);
    
    const industries = [...new Set(sampleData.companies.map(d => d.industry))];
    
    industries.forEach((industry, i) => {
        const legendRow = legend.append('g')
            .attr('transform', `translate(0, ${i * 20})`);
        
        legendRow.append('rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', colorScale(industry));
        
        legendRow.append('text')
            .attr('x', 15)
            .attr('y', 10)
            .attr('text-anchor', 'start')
            .style('font-size', '12px')
            .text(industry);
    });
}

// Create tree map visualization
function createTreeMap(container) {
    const width = container.clientWidth;
    const height = container.clientHeight;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    
    // Create SVG
    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Prepare hierarchical data
    const industryGroups = {};
    sampleData.companies.forEach(company => {
        if (!industryGroups[company.industry]) {
            industryGroups[company.industry] = {
                name: company.industry,
                children: []
            };
        }
        industryGroups[company.industry].children.push({
            name: company.name,
            value: company.valuation_billion,
            company: company
        });
    });
    
    const hierarchyData = {
        name: 'Unicorns',
        children: Object.values(industryGroups)
    };
    
    // Create hierarchy and treemap layout
    const root = d3.hierarchy(hierarchyData)
        .sum(d => d.value);
    
    d3.treemap()
        .size([width - margin.left - margin.right, height - margin.top - margin.bottom])
        .padding(2)
        .round(true)
        (root);
    
    // Color scale
    const colorScale = d3.scaleOrdinal()
        .domain(sampleData.industryStats.map(d => d.industry))
        .range(['#6f42c1', '#20c997', '#fd7e14', '#dc3545', '#17a2b8', '#6c757d']);
    
    // Create tooltip
    const tooltip = d3.select(container)
        .append('div')
        .attr('class', 'custom-tooltip')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('pointer-events', 'none');
    
    // Add cells
    const cell = svg.selectAll('g')
        .data(root.leaves())
        .enter().append('g')
        .attr('transform', d => `translate(${d.x0 + margin.left},${d.y0 + margin.top})`);
    
    cell.append('rect')
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('fill', d => colorScale(d.parent.data.name))
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .style('opacity', 0.8)
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(300)
                .style('opacity', 1)
                .attr('stroke-width', 2);
            
            tooltip.transition()
                .duration(300)
                .style('opacity', 1);
            
            tooltip.html(`
                <strong>${d.data.name}</strong><br/>
                Industry: ${d.parent.data.name}<br/>
                Valuation: $${d.data.value}B<br/>
                Country: ${d.data.company.country}
            `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function() {
            d3.select(this)
                .transition()
                .duration(300)
                .style('opacity', 0.8)
                .attr('stroke-width', 1);
            
            tooltip.transition()
                .duration(300)
                .style('opacity', 0);
        })
        .on('click', function(event, d) {
            showCompanyDetails(d.data.company);
        });
    
    // Add text labels
    cell.append('text')
        .attr('x', 5)
        .attr('y', 15)
        .text(d => d.data.name)
        .attr('font-size', '10px')
        .attr('fill', '#fff')
        .style('opacity', 0);
    
    // Add animation
    cell.selectAll('rect')
        .style('opacity', 0)
        .transition()
        .duration(800)
        .delay((d, i) => i * 20)
        .style('opacity', 0.8);
    
    cell.selectAll('text')
        .style('opacity', 0)
        .transition()
        .duration(800)
        .delay((d, i) => i * 20 + 400)
        .style('opacity', 1);
    
    // Add legend
    const legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${width - 120}, ${margin.top})`);
    
    const industries = [...new Set(sampleData.companies.map(d => d.industry))];
    
    industries.forEach((industry, i) => {
        const legendRow = legend.append('g')
            .attr('transform', `translate(0, ${i * 20})`);
        
        legendRow.append('rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', colorScale(industry));
        
        legendRow.append('text')
            .attr('x', 15)
            .attr('y', 10)
            .attr('text-anchor', 'start')
            .style('font-size', '12px')
            .text(industry);
    });
}

// Initialize map
function initializeMap() {
    // Create map
    map = L.map('map').setView([20, 0], 2);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Create marker cluster group
    markerClusterGroup = L.markerClusterGroup();
    
    // Add markers
    sampleData.companies.forEach(company => {
        const marker = L.marker([company.lat, company.lng])
            .bindPopup(`
                <strong>${company.name}</strong><br>
                Industry: ${company.industry}<br>
                Valuation: $${company.valuation_billion}B<br>
                Country: ${company.country}
            `);
        
        markers.push(marker);
        markerClusterGroup.addLayer(marker);
    });
    
    // Add marker cluster to map
    map.addLayer(markerClusterGroup);
    
    // Create heatmap data
    const heatData = sampleData.companies.map(company => [
        company.lat,
        company.lng,
        company.valuation_billion / 2 // Weight by valuation
    ]);
    
    // Create heatmap layer
    heatmapLayer = L.heatLayer(heatData, {
        radius: 25,
        blur: 15,
        maxZoom: 10,
        gradient: {
            0.1: '#6f42c1',
            0.3: '#20c997',
            0.5: '#fd7e14',
            0.7: '#dc3545',
            1.0: '#ffc107'
        }
    });
    
    // Add map view controls
    document.querySelectorAll('input[name="mapView"]').forEach(input => {
        input.addEventListener('change', function() {
            mapView = this.value;
            updateMapView();
        });
    });
}

// Update map view based on selected option
function updateMapView() {
    all layers
    map.removeLayer(markerClusterGroup);
    if (map.hasLayer(heatmapLayer)) {
        map.removeLayer(heatmapLayer);
    }
    
    // Add selected layer
    switch(mapView) {
        case 'markers':
            map.addLayer(markerClusterGroup);
            break;
        case 'heatmap':
            map.addLayer(heatmapLayer);
            break;
        case 'clusters':
            map.addLayer(markerClusterGroup);
            break;
    }
}

// Initialize timeline feature
function initializeTimeline() {
    const timelineContainer = document.getElementById('company-timeline');
    const timelineCompanySelect = document.getElementById('timeline-company');
    
    // Show timeline for first company by default
    if (sampleData.companies.length > 0) {
        showTimeline(sampleData.companies[0].id, timelineContainer);
    }
    
    // Add event listener for company selection
    timelineCompanySelect.addEventListener('change', function() {
        const companyId = parseInt(this.value);
        showTimeline(companyId, timelineContainer);
    });
}

// Show timeline for selected company
function showTimeline(companyId, container) {
    // Clear container
    container.innerHTML = '';
    
    // Get company data
    const company = sampleData.companies.find(c => c.id === companyId);
    if (!company) return;
    
    // Get timeline events for company
    const events = sampleData.timelineEvents.filter(e => e.company_id === companyId);
    if (events.length === 0) {
        container.innerHTML = '<p class="text-center">No timeline data available for this company.</p>';
        return;
    }
    
    // Sort events by date
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Create timeline
    const timeline = document.createElement('div');
    timeline.className = 'timeline-wrapper';
    
    // Add events to timeline
    events.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.style.opacity = '0';
        eventElement.style.transform = 'translateY(20px)';
        
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        
        eventElement.innerHTML = `
            <div class="event-date">${formattedDate}</div>
            <div class="event-title">${event.event}</div>
            <div class="event-description">${event.description}</div>
        `;
        
        timeline.appendChild(eventElement);
        
        // Add animation with delay
        setTimeout(() => {
            eventElement.style.opacity = '1';
            eventElement.style.transform = 'translateY(0)';
            eventElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, index * 200);
    });
    
    container.appendChild(timeline);
}

// Initialize growth calculator
function initializeGrowthCalculator() {
    const calculateBtn = document.getElementById('calculate-growth');
    const growthRateSlider = document.getElementById('calculator-growth-rate');
    const growthRateValue = document.getElementById('growth-rate-value');
    
    // Update growth rate value display
    growthRateSlider.addEventListener('input', function() {
        growthRateValue.textContent = `${this.value}%`;
    });
    
    // Calculate button click handler
    calculateBtn.addEventListener('click', function() {
        const industry = document.getElementById('calculator-industry').value;
        const currentValuation = parseFloat(document.getElementById('calculator-current-valuation').value);
        const foundedYear = parseInt(document.getElementById('calculator-founded-year').value);
        const funding = parseFloat(document.getElementById('calculator-funding').value);
        const growthRate = parseInt(growthRateSlider.value);
        
        // Validate inputs
        if (isNaN(currentValuation) || isNaN(foundedYear) || isNaN(funding)) {
            alert('Please enter valid values for all fields.');
            return;
        }
        
        // Calculate projection
        calculateProjection(industry, currentValuation, foundedYear, funding, growthRate);
    });
}

// Calculate unicorn growth projection
function calculateProjection(industry, currentValuation, foundedYear, funding, growthRate) {
    // Get industry data
    const industryData = sampleData.industryStats.find(stat => stat.industry === industry);
    const industryGrowthRate = industryData ? industryData.growth_rate : 20; // Default to 20% if not found
    
    // Calculate years to unicorn
    const currentYear = new Date().getFullYear();
    const companyAge = currentYear - foundedYear;
    
    // Convert current valuation from millions to billions
    const valuationInBillions = currentValuation / 1000;
    
    // Calculate years to reach unicorn status (1 billion)
    let yearsToUnicorn = 0;
    let projectedValuation = valuationInBillions;
    
    if (valuationInBillions < 1) {
        // Calculate compound growth
        const effectiveGrowthRate = (growthRate + industryGrowthRate) / 2 / 100;
        
        while (projectedValuation < 1) {
            projectedValuation *= (1 + effectiveGrowthRate);
            yearsToUnicorn++;
            
            // Cap at 20 years for UI purposes
            if (yearsToUnicorn > 20) break;
        }
    }
    
    // Calculate confidence score based on multiple factors
    let confidenceScore = 70; // Base score
    
    // Adjust based on industry
    if (industryData) {
        if (industryData.growth_rate > 25) confidenceScore += 10;
        else if (industryData.growth_rate < 15) confidenceScore -= 10;
    }
    
    // Adjust based on funding
    if (funding > 100) confidenceScore += 10;
    else if (funding < 10) confidenceScore -= 10;
    
    // Adjust based on current valuation
    if (valuationInBillions > 0.5) confidenceScore += 10;
    else if (valuationInBillions < 0.1) confidenceScore -= 10;
    
    // Adjust based on company age
    if (companyAge < 3) confidenceScore -= 5;
    else if (companyAge > 10) confidenceScore -= 10;
    
    // Cap confidence score
    confidenceScore = Math.max(10, Math.min(95, confidenceScore));
    
    // Update UI with results
    const predictionResult = document.querySelector('.prediction-result');
    predictionResult.classList.remove('d-none');
    
    document.getElementById('unicorn-date-prediction').textContent = valuationInBillions >= 1 ? 
        'Already a unicorn!' : 
        `${new Date().getFullYear() + yearsToUnicorn}`;
    
    document.getElementById('years-to-unicorn').textContent = valuationInBillions >= 1 ? 
        '0 (Already achieved)' : 
        yearsToUnicorn > 20 ? 'More than 20 years' : `${yearsToUnicorn} years`;
    
    document.getElementById('projected-valuation').textContent = `$${projectedValuation.toFixed(2)}B`;
    
    const confidenceBar = document.getElementById('confidence-score');
    confidenceBar.style.width = `${confidenceScore}%`;
    confidenceBar.textContent = `${confidenceScore}%`;
    confidenceBar.setAttribute('aria-valuenow', confidenceScore);
    
    // Create projection chart
    createProjectionChart(valuationInBillions, growthRate, industryGrowthRate, yearsToUnicorn);
}

// Create projection chart
function createProjectionChart(currentValuation, growthRate, industryGrowthRate, yearsToUnicorn) {
    const ctx = document.getElementById('projection-chart').getContext('2d');
    
    // Clear existing chart if any
    if (charts.projection) {
        charts.projection.destroy();
    }
    
    // Generate projection data
    const years = Math.min(10, yearsToUnicorn + 2);
    const labels = Array.from({length: years + 1}, (_, i) => `Year ${i}`);
    
    const companyData = [currentValuation];
    const industryAvgData = [currentValuation];
    
    const companyGrowthRate = growthRate / 100;
    const avgGrowthRate = industryGrowthRate / 100;
    
    for (let i = 1; i <= years; i++) {
        companyData.push(companyData[i-1] * (1 + companyGrowthRate));
        industryAvgData.push(industryAvgData[i-1] * (1 + avgGrowthRate));
    }
    
    // Create chart
    charts.projection = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Your Company',
                data: companyData,
                backgroundColor: 'rgba(111, 66, 193, 0.2)',
                borderColor: 'rgba(111, 66, 193, 1)',
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: 'rgba(111, 66, 193, 1)'
            }, {
                label: 'Industry Average',
                data: industryAvgData,
                backgroundColor: 'rgba(32, 201, 151, 0.2)',
                borderColor: 'rgba(32, 201, 151, 1)',
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: 'rgba(32, 201, 151, 1)',
                borderDash: [5, 5]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: $${context.raw.toFixed(2)}B`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valuation ($B)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Show company details in modal
function showCompanyDetails(company) {
    // Set modal content
    document.getElementById('company-name').textContent = company.name;
    document.getElementById('company-industry').textContent = company.industry;
    document.getElementById('company-founded').textContent = new Date(company.founded_date).toLocaleDateString();
    document.getElementById('company-unicorn-date').textContent = new Date(company.unicorn_date).toLocaleDateString();
    document.getElementById('company-valuation').textContent = `$${company.valuation_billion}B`;
    
    // Determine category
    let category = 'Standard Unicorn';
    if (company.valuation_billion >= 10) category = 'Super Unicorn';
    else if (company.valuation_billion >= 5) category = 'Elite Unicorn';
    else if (company.valuation_billion >= 2) category = 'Premium Unicorn';
    
    document.getElementById('company-category').textContent = category;
    
    // Create company growth chart
    createCompanyGrowthChart(company);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('company-details-modal'));
    modal.show();
}

// Create company growth chart
function createCompanyGrowthChart(company) {
    const ctx = document.getElementById('company-growth-chart').getContext('2d');
    
    // Clear existing chart if any
    if (charts.companyGrowth) {
        charts.companyGrowth.destroy();
    }
    
    // Get founding and unicorn dates
    const foundingDate = new Date(company.founded_date);
    const unicornDate = new Date(company.unicorn_date);
    
    // Calculate years between founding and unicorn status
    const yearDiff = unicornDate.getFullYear() - foundingDate.getFullYear();
    
    // Generate data points
    const labels = [];
    const valuationData = [];
    
    // Start with founding year
    labels.push(foundingDate.getFullYear().toString());
    valuationData.push(0.01); // Starting valuation (very small)
    
    // Add unicorn year
    labels.push(unicornDate.getFullYear().toString());
    valuationData.push(1); // Unicorn status = $1B
    
    // Add current valuation
    const currentYear = new Date().getFullYear();
    if (currentYear > unicornDate.getFullYear()) {
        labels.push(currentYear.toString());
        valuationData.push(company.valuation_billion);
    }
    
    // Create chart
    charts.companyGrowth = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Valuation ($B)',
                data: valuationData,
                backgroundColor: 'rgba(111, 66, 193, 0.2)',
                borderColor: 'rgba(111, 66, 193, 1)',
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 6,
                pointBackgroundColor: 'rgba(111, 66, 193, 1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Valuation: $${context.raw.toFixed(2)}B`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valuation ($B)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Add event listeners
function addEventListeners() {
    // Chart view toggle
    document.querySelectorAll('.chart-controls .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            currentView = view;
            
            // Update active button
            document.querySelectorAll('.chart-controls .btn').forEach(b => {
                b.classList.remove('btn-light');
                b.classList.add('btn-outline-light');
            });
            this.classList.remove('btn-outline-light');
            this.classList.add('btn-light');
            
            // Update chart visibility
            if (view === 'yearly') {
                charts.growthTrend.data.datasets[0].hidden = false;
                charts.growthTrend.data.datasets[1].hidden = true;
            } else {
                charts.growthTrend.data.datasets[0].hidden = true;
                charts.growthTrend.data.datasets[1].hidden = false;
            }
            
            charts.growthTrend.update();
        });
    });
    
    // Apply filters button
    document.getElementById('apply-filters').addEventListener('click', function() {
        applyFilters();
    });
    
    // Reset filters button
    document.getElementById('reset-filters').addEventListener('click', function() {
        resetFilters();
    });
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Apply filters to data
function applyFilters() {
    const startYear = parseInt(document.getElementById('start-year').value);
    const endYear = parseInt(document.getElementById('end-year').value);
    const selectedIndustries = Array.from(document.getElementById('industry-select').selectedOptions).map(option => option.value);
    const minValuation = parseFloat(document.getElementById('min-valuation').value) || 0;
    const maxValuation = parseFloat(document.getElementById('max-valuation').value) || Infinity;
    const region = document.getElementById('region-select').value;
    
    // Filter companies
    const filteredCompanies = sampleData.companies.filter(company => {
        const unicornYear = new Date(company.unicorn_date).getFullYear();
        const industryMatch = selectedIndustries.length === 0 || selectedIndustries.includes(company.industry);
        const valuationMatch = company.valuation_billion >= minValuation && 
                             (maxValuation === Infinity || company.valuation_billion <= maxValuation);
        const yearMatch = unicornYear >= startYear && unicornYear <= endYear;
        
        let regionMatch = true;
        if (region !== 'all') {
            // Simple region matching logic - could be more sophisticated
            const regionMap = {
                'north-america': ['United States', 'Canada', 'Mexico'],
                'europe': ['United Kingdom', 'Germany', 'France', 'Sweden', 'Netherlands'],
                'asia': ['China', 'India', 'Japan', 'Singapore', 'South Korea'],
                'other': ['Brazil', 'Australia', 'South Africa']
            };
            
            regionMatch = regionMap[region] && regionMap[region].includes(company.country);
        }
        
        return industryMatch && valuationMatch && yearMatch && regionMatch;
    });
    
    // Update filtered data
    filteredData = {
        ...sampleData,
        companies: filteredCompanies
    };
    
    // Update UI
    updateDashboard();
}

// Reset filters
function resetFilters() {
    document.getElementById('start-year').value = Math.min(...sampleData.yearlyStats.map(stat => stat.year));
    document.getElementById('end-year').value = Math.max(...sampleData.yearlyStats.map(stat => stat.year));
    document.getElementById('industry-select').selectedIndex = -1;
    document.getElementById('min-valuation').value = '';
    document.getElementById('max-valuation').value = '';
    document.getElementById('region-select').value = 'all';
    
    // Reset filtered data
    filteredData = {...sampleData};
    
    // Update UI
    updateDashboard();
}

// Update dashboard with filtered data
function updateDashboard() {
    // Update summary stats
    const totalUnicorns = filteredData.companies.length;
    const avgValuation = totalUnicorns > 0 ? 
        (filteredData.companies.reduce((sum, company) => sum + company.valuation_billion, 0) / totalUnicorns).toFixed(1) : 
        0;
    const superUnicorns = filteredData.companies.filter(company => company.valuation_billion >= 10).length;
    
    document.getElementById('total-unicorns').textContent = totalUnicorns;
    document.getElementById('avg-valuation').textContent = `$${avgValuation}B`;
    document.getElementById('super-unicorns').textContent = superUnicorns;
    
    // Update map
    updateMap();
    
    // Update interactive visualization
    updateInteractiveViz();
}

// Update map with filtered data
function updateMap() {
    // Clear existing markers
    markerClusterGroup.clearLayers();
    
    // Add filtered markers
    filteredData.companies.forEach(company => {
        const marker = L.marker([company.lat, company.lng])
            .bindPopup(`
                <strong>${company.name}</strong><br>
                Industry: ${company.industry}<br>
                Valuation: $${company.valuation_billion}B<br>
                Country: ${company.country}
            `);
        
        markerClusterGroup.addLayer(marker);
    });
    
    // Update heatmap data
    const heatData = filteredData.companies.map(company => [
        company.lat,
        company.lng,
        company.valuation_billion / 2 // Weight by valuation
    ]);
    
    // Remove existing heatmap layer
    if (map.hasLayer(heatmapLayer)) {
        map.removeLayer(heatmapLayer);
    }
    
    // Create new heatmap layer
    heatmapLayer = L.heatLayer(heatData, {
        radius: 25,
        blur: 15,
        maxZoom: 10,
        gradient: {
            0.1: '#6f42c1',
            0.3: '#20c997',
            0.5: '#fd7e14',
            0.7: '#dc3545',
            1.0: '#ffc107'
        }
    });
    
    // Update map view
    updateMapView();
}

// Update interactive visualization with filtered data
function updateInteractiveViz() {
    const vizContainer = document.getElementById('interactive-visualization');
    
    // Clear container
    vizContainer.innerHTML = '';
    
    // Create selected visualization
    switch(currentVizType) {
        case 'bubble':
            createBubbleChart(vizContainer);
            break;
        case 'scatter':
            createScatterPlot(vizContainer);
            break;
        case 'tree':
            createTreeMap(vizContainer);
            break;
    }
}