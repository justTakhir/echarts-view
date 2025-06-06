import React from "react";
import classes from "./Pagination.module.css";
import classNames from "classnames";

interface PaginationProps {
  pagesCount: number;
  currentIndex: number;
  changeIndex: (index: number) => void;
}

export function Pagination({ pagesCount, currentIndex, changeIndex }: PaginationProps) {
  return (
    <div className={classes.wrapper}>
      {Array.from(Array(pagesCount).keys()).map(el => (
        <div
          onClick={() => changeIndex(el)}
          className={currentIndex === el
            ? classNames(classes.selected, classes.page)
            : classes.page}
        >
          {el}
        </div>
      ))}
    </div>
  );
}