// import type { EChartsOption } from "echarts";
import { Slider } from "../Slider/Slider";
import { useState } from "react";
import { Chart, type EChartsOption } from "../Chart/Chart";
import { Pagination } from "../Pagination/Pagination";
import classes from "./ChartsShowcase.module.css";

export type ShowcaseChartType = {
  id: number;
  title: string; // Наверх пагинации чисто
  option: EChartsOption;
}

interface ChartsShowcaseProps {
  items: ShowcaseChartType[];
}
export function ChartsShowcase({ items }: ChartsShowcaseProps) {
  const [actualItemIndex, setActualItemIndex] = useState<number>(0);
  return (
    <div className={classes.wrapper}>
      <Slider
        title={items[actualItemIndex].title ?? "Нет данных"}
        itemsCount={items.length}
        currentIndex={actualItemIndex}
        changeIndex={setActualItemIndex}
      />
      <Chart option={items[actualItemIndex].option} />
      <Pagination
        pagesCount={items.length}
        currentIndex={actualItemIndex}
        changeIndex={setActualItemIndex}
      />
    </div>
  );
}