import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: '#f4f4f4',
                    foreColor: '#333'
                },
                xaxis: {
                    catergories: [
                        'New York City',
                        'Los Angeles',
                        'Chicago',
                        'Houston',
                        'Phoenix',
                        'Philadelphia',
                        'San Antonio',
                        'San Diego',
                        'Dallas',
                        'San Jose'
                    ]
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                fill: {
                    colors: ['#f44336']
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'Largest U.S. Cities By Population',
                    align: 'center',
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: '25px'
                    }
                }
            },
            series: [{
                name: 'Population',
                data: [
                    8398748,
                    3990456,
                    2705994,
                    2325502,
                    1660272,
                    1584138,
                    1532233,
                    1425976,
                    1345047,
                    1030119
                ]
            }]
        };
    }

    onClick = () => {
        this.setState({
            options: {...this.state.options,
                plotOptions: {...this.state.options.plotOptions,
                    bar: {...this.state.options.plotOptions.bar,
                        horizontal: !this.state.options.plotOptions.bar.horizontal
                    }
                }
            }
        });
    };

    render() {
        return ( <
            React.Fragment >
            <
            Chart options = { this.state.options }
            series = { this.state.series }
            type = 'bar'
            height = '450'
            width = '100%' /
            >
            <
            button onClick = { this.onClick } > Change < /button> < /
            React.Fragment >
        );
    }
}

export default PopChart;