import React from 'react'
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = ({style, color}) => {
    const option = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%'
        },
        xAxis: [
            {
                type: 'category',
                show: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }
        ],
        series: [
            
            {
                name: 'Returning users',
                type: 'bar',
                stack: 'onstack',
                barWidth: 15,
                itemStyle: {
                    barBorderColor: '#F4F4F4'
                },
                data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 
                    191, 234, 290, 330, 290, 330, 310, 220, 182]
            },
            {
                name: 'New users',
                type: 'bar',
                stack: 'onstack',
                barWidth: 15,
                itemStyle: {
                    barBorderColor: '#F4F4F4'
                },
                data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410, 150, 232, 
                    201, 154, 190, 330, 190, 330, 410, 150, 232]
            },
            
            
        ]
    };
    
    return (
        <ReactEcharts option={option} 
        style={style}
        />
    )
}

export default Component
