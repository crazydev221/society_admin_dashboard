import React from 'react';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

import { data } from '../data/StackAreaCountry';

const Component = () => {
    const option = {
        color: ['#85D6BE', '#757D85', '#A996E5', '#FFE583', '#8DBDF7', '#52B38C', '#E1E2E3'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['North America', 'Africa', 'South America', 'Asia', 'Europe', 'Australia', 'Antarctica']
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                show: false,
                data: (function (){
                    let res = [];
                    let len = 0;
                    while (len < 118) {
                        res.push(len+1);
                        len++;
                    }
                    return res;
                })()
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: true,
                position: 'right'
            }
        ],
        series: [
            {
                name: 'North America',
                type: 'line',
                stack: 'series',
                areaStyle: {},
                data: data[0].values
            },
            {
                name: 'Africa',
                type: 'line',
                stack: 'series',
                areaStyle: {},
                data: data[1].values
            },
            {
                name: 'South America',
                type: 'line',
                stack: 'series',
                areaStyle: {},
                data: data[2].values
            },
            {
                name: 'Asia',
                type: 'line',
                stack: 'series',
                areaStyle: {},
                data: data[3].values
            },
            {
                name: 'Europe',
                type: 'line',
                stack: 'series',
                areaStyle: {},
                data: data[4].values
            },
            {
                name: 'Australia',
                type: 'line',
                stack: 'series',
                areaStyle: {},
                data: data[5].values
            },
            {
                name: 'Antarctica',
                type: 'line',
                stack: 'series',
                areaStyle: {},
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                data: data[6].values
            }
        ]
    };
    
    return (
        <ReactEcharts 
            option={option}
        />
    )
}

export default Component;
