import React from 'react';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = ({colors, showX, showY, dataX, series, showLegend, showTooltip}) => {

    const option = {
        color: colors,
        legend: {
            data: ['6 months sales'],
            show: showLegend
        },
        tooltip: {
            trigger: 'axis',
            show: showTooltip
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            show: showX,
            data: dataX
        },
        grid: {
            left: '2%',
            right: '2%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            show: showY
        },
        series: series
    };

    return (
        <ReactEcharts option={option} />
    )
}

export default Component

