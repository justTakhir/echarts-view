import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts/core';
import type { GridComponentOption, LineSeriesOption } from "echarts";

export type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

interface ChartProps {
  option: EChartsOption;
}

export function Chart({ option }: ChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (containerRef.current) {
      const myChart = echarts.init(containerRef.current);
      myChart.setOption(option);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>

    </div>
  )
}