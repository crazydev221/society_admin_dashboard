import React from 'react';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = () => {
    const option = {
        color: ['#D83C30'],
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0%',
            right: '20%',
            top: 0,
            bottom: 60,
            containLabel: true
        },
        xAxis: [
            {   
                type: 'category',
                boundaryGap: true,
                show: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false,
            }
        ],
        series: [
            {
                type: 'bar',
                showBackground: true,
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        // backgroundColor: 'white'
                    }
                },
                data: [140, 115, 130, 100, 151, 160, 120, 140, 122]
            }
        ]
    };

    return (
        <ReactEcharts 
            option={option}
        />
    )
}

export default Component
