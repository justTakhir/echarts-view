import React from "react";
import classes from "./Slider.module.css";

interface SliderProps {
  title: string;
  currentIndex: number;
  changeIndex: (index: number) => void;
  itemsCount: number;
}
export function Slider({ title, currentIndex, changeIndex, itemsCount }: SliderProps) {
  return (
    <div className={classes.wrapper}>
      <div
        onClick={() => changeIndex((currentIndex - 1 + itemsCount) % itemsCount)}
        className={classes.button}
      >
        {"<"}
      </div>
      <div className={classes.title}>
        {title}
      </div>
      <div
        onClick={() => changeIndex((currentIndex + 1) % itemsCount)}
        className={classes.button}
      >
        {">"}
      </div>
    </div>
  )
}