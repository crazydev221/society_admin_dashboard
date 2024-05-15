import React from 'react';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = () => {    
    
    const option = {
        color: ['#D83C32', '#FFD945', '#E0E0E0', '#4B4B4B'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '30%'
        },
        series: [
            {
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '1'},
                    {value: 310, name: '2'},
                    {value: 234, name: '3'},
                    {value: 135, name: '4'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
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

