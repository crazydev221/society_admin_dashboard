import React , { Component } from 'react';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

require('echarts/map/js/world.js');

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }
    timeTicket = null;
    getInitialState = () => ({option: this.getOption()});

    componentDidMount() {
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
        this.timeTicket = setInterval(() => {
            const option = this.state.option;
            
            this.setState({ option: option });
        }, 1000);
    };
    componentWillUnmount() {
        if (this.timeTicket) {
        clearInterval(this.timeTicket);
        }
    };
    randomData() {
        return Math.round(Math.random()*1000);
    };
    getOption = () => {
        return {
            color: ['#0e5225', '#1A9367', '#CA4845'],
            grid: {
                left: '0%',
                right: '0%'
            },
            tooltip: {
                show: false
            },
            series: [
                {
                    type: 'map',
                    mapType: 'world',
                    center: [104.114129, 37.550339],
                    roam: true,
                    zoom: 4,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        areaColor: '#1A9367',
                        shadowColor: '#0e5225'
                    },
                    emphasis: {
                        itemStyle: {
                            areaColor: '#096343'
                        }
                    }
                },
            ]
        };
    };
    render() {
        return (
            <div className='parent'>
                <ReactEcharts
                    option={this.state.option}
                    style={{height: '500px', width: '100%'}}
                />
            </div>
        );
    };
}