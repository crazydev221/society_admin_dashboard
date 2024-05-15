import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = () => {
    const [option] = useState({
        color: ['#19ad79', '#E9E9E9'],
        tooltip: {
            trigger: 'axis'
        },
        
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                show: false,
                data: [
                    1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,31,32,33
                ]
            },
            {
                type: 'category',
                boundaryGap: false,
                show: false,
                data: [
                    1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,31,32,33
                ]
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                show: false,
                name: '价格',
                max: 3430,
                min: 0,
            },
            {
                type: 'value',
                scale: true,
                show: false,
                name: '预购量',
                max: 2200,
                min: 0,
            }
        ],
        series: [
            {
                name: 'DB Server',
                type: 'line',
                stack: 'server',
                areaStyle: {},
                smooth: true,
                data: [
                    1280, 1025, 1333, 926, 1388, 1020, 1360, 900, 1314, 1050, 1343,
                    1020, 1360, 900, 1020, 1360, 900, 1314, 1050, 1343, 926, 1388,
                    1280, 1025, 1333, 1360, 900, 1020, 1360, 900, 1314, 1050, 1343,
                ]
            },
            {
                name: 'Web Server',
                type: 'line',
                stack: 'server',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                areaStyle: {},
                smooth: true,
                data: [
                    2165, 2198, 1930, 2079, 2131, 2007, 2102, 1961, 2157, 2062, 1994,
                    2165, 2198, 1930, 2079, 2131, 2007, 2102, 1961, 2157, 2062, 1994,
                    2165, 2198, 1930, 2079, 2131, 2007, 2102, 1961, 2157, 2062, 1994,
                ]
            }
        ]
    });

    const [optionData, setOptionData] = useState(option);
    
    useEffect(() => {
        const interval = setInterval(() => {
        let count = 33;
        let axisData = 1;
        let cloneOption = cloneDeep(optionData);
        let data0 = cloneOption.series[1].data;
        let data1 = cloneOption.series[0].data;
        data0.shift();
        data0.push(Math.floor(Math.random() * (1650 - 2200) + 2200));
        data1.shift();
        data1.push(Math.floor(Math.random() * (950 - 1550) + 1200));
    
        cloneOption.xAxis[0].data.shift();
        cloneOption.xAxis[0].data.push(axisData);
        cloneOption.xAxis[1].data.shift();
        cloneOption.xAxis[1].data.push(count++);

        setOptionData(cloneOption);
      }, 1500);
      return () => clearInterval(interval);
    }, [optionData]);

    return (
        <ReactEcharts 
            option={optionData}
        />
    )
}

export default Component;
