import React from 'react';
import ReactApexChart from 'react-apexcharts';

// Define chart configurations
const chartConfigs = [
    {
        series: [70],
        labels: ['Product Quality'],
        colors: ['#1E90FF'], // Dodger Blue
    },
    {
        series: [85],
        labels: ['Camera'],
        colors: ['#1E90FF'], // Tomato
    },
    {
        series: [55],
        labels: ['Speed'],
        colors: ['#1E90FF'], // Lime Green
    },
    {
        series: [90],
        labels: ['24/7 support'],
        colors: ['#1E90FF'], // Gold
    }
];

const RadialbarCharts = () => {
    return (
        <div className="container">
            <div className="row">
                {chartConfigs.map((config, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <ReactApexChart
                            className="apex-charts"
                            series={config.series}
                            options={{
                                chart: {
                                    height: 300,
                                    type: 'radialBar',
                                },
                                plotOptions: {
                                    radialBar: {
                                        hollow: {
                                            size: '70%',
                                        }
                                    },
                                },
                                labels: config.labels,
                                colors: config.colors,
                            }}
                            type="radialBar"
                            height={300}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RadialbarCharts;
