import { useEffect, useRef, useState } from 'react'
import './App.css'


import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
// import type { EChartsOption } from 'echarts';
import { ChartsShowcase, type ShowcaseChartType } from './components/ChartsShowcase';
import type { EChartsOption } from './components/Chart/Chart';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

const option1: EChartsOption = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: 'rgb(251, 250, 255)'
          },
          {
            offset: 0.1,
            color: 'rgb(202, 185, 255)'
          },
          {
            offset: 0.8,
            color: 'rgb(165, 248, 156)'
          },
          {
            offset: 1,
            color: 'rgb(181, 201, 116)'
          }
        ])
      },
    },
  ],

};

const charts: ShowcaseChartType[] = [
  {
    title: "Линия с закрашенной областью",
    option: option1
  },
  {
    title: "Линия с11 закрашенной областью",
    option: option1
  },
  {
    title: "Линия с222 закрашенной областью",
    option: option1
  }
]


function App() {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (containerRef.current) {
      const myChart = echarts.init(containerRef.current);
      myChart.setOption(option1);
    }
  }, []);
  // var chartDom = document.getElementById('main')!;
  // var option: EChartsOption;


  // option && myChart.setOption(option);

  return (
    <>
      <div ref={containerRef} style={{ width: '600px', height: '400px' }}>

      </div>
      <ChartsShowcase items={charts} />
    </>
  )
}

export default App
