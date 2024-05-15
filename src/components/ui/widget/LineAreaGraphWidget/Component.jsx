import React from 'react'
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = () => {

    const option = {
        
        color: ['#21AD79'],
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '23%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            show: false,
            data : [1, 2, 3, 4, 5, 6, 7],
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                name: 'Site visits',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                data: [20, 30, 60, 65, 85, 70, 40]
            }
        ]
    };
    

    return (
        <ReactEcharts 
            option={option}
            style={{height: '225px', width: '100%'}}
        />
    )
}

export default Component
