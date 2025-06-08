import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import type { GridComponentOption, LineSeriesOption } from "echarts";
import classes from "./Chart.module.css";

export type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

interface ChartProps {
  option: EChartsOption;
}

export function Chart({ option }: ChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const myChart = useRef<echarts.ECharts>(null);

  useEffect(() => {
    if (containerRef.current) {
      myChart.current = echarts.init(containerRef.current, null, {
        renderer: 'canvas',
        useDirtyRect: false
      });
      // myChart.current.setOption(option);
      // @ts-ignore
      window.addEventListener('resize', myChart.current.resize);

    }
    return () => {
      // @ts-ignore
      myChart.current && window.addEventListener('resize', myChart.current.resize);
      // myChart.current = null;
      // myChart.current?.clear();
      // myChart.current?.dispose();
      // myChart.current = null;
    }
  }, [option]);

  useEffect(() => {
    // myChart.current?.clear();
    myChart.current && myChart.current.setOption(option, { notMerge: true });
  }, [option])

  return (
    <div
      id="chart-container"
      ref={containerRef}
      className={classes.wrapper}
    >
    </div>
  )
}

// ЭТО К ВОПРОСУ ПРО КАСТОМИЗАЦИЮ ФУНКЦИЙ И ВСЁ ТАКОЕ

// interface DataItem {
//   value: number;
//   groupId: string;
// }
// option = {
//   xAxis: {
//     data: ['Animals', 'Fruits', 'Cars']
//   },
//   yAxis: {},
//   dataGroupId: '',
//   animationDurationUpdate: 500,
//   series: {
//     type: 'bar',
//     id: 'sales',
//     data: [
//       {
//         value: 5,
//         groupId: 'animals'
//       },
//       {
//         value: 2,
//         groupId: 'fruits'
//       },
//       {
//         value: 4,
//         groupId: 'cars'
//       }
//     ] as DataItem[],
//     universalTransition: {
//       enabled: true,
//       divideShape: 'clone'
//     }
//   }
// };

// const drilldownData = [
//   {
//     dataGroupId: 'animals',
//     data: [
//       ['Cats', 4],
//       ['Dogs', 2],
//       ['Cows', 1],
//       ['Sheep', 2],
//       ['Pigs', 1]
//     ]
//   },
//   {
//     dataGroupId: 'fruits',
//     data: [
//       ['Apples', 4],
//       ['Oranges', 2]
//     ]
//   },
//   {
//     dataGroupId: 'cars',
//     data: [
//       ['Toyota', 4],
//       ['Opel', 2],
//       ['Volkswagen', 2]
//     ]
//   }
// ];

// myChart.on('click', function (event) {
//   if (event.data) {
//     var subData = drilldownData.find(function (data) {
//       return data.dataGroupId === (event.data as DataItem).groupId;
//     });
//     if (!subData) {
//       return;
//     }
//     myChart.setOption<echarts.EChartsOption>({
//       xAxis: {
//         data: subData.data.map(function (item) {
//           return item[0];
//         })
//       },
//       series: {
//         type: 'bar',
//         id: 'sales',
//         dataGroupId: subData.dataGroupId,
//         data: subData.data.map(function (item) {
//           return item[1];
//         }),
//         universalTransition: {
//           enabled: true,
//           divideShape: 'clone'
//         }
//       },
//       graphic: [
//         {
//           type: 'text',
//           left: 50,
//           top: 20,
//           style: {
//             text: 'Back',
//             fontSize: 18
//           },
//           onclick: function () {
//             myChart.setOption<echarts.EChartsOption>(option);
//           }
//         }
//       ]
//     });
//   }
// });
