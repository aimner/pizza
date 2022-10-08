import React, { useEffect, useState } from "react";
import classes from "./SortMenu.module.scss";
import sort from "../../../assets/img/Header/sort.svg";

type PropsType = {
  activeSortMenu: boolean;
  setActiveSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SortMenu: React.FunctionComponent<PropsType> = (props) => {
  const sortItemArr = ["популярности", "цене", "алфавиту"] as const;

  let [activeSort, setActiveSort] = useState("популярности" as typeof sortItemArr[number]);

  let changeClass = (property: typeof sortItemArr[number]) => {
    if (activeSort === property) {
      return `${classes.sortMenuListItemActive}`;
    }
  };


  const sortClick = (item: typeof sortItemArr[number]): void => {
    setActiveSort(item);
  }

  return (
    <div className={classes.sortMenu}>
      <div className={classes.sortImgContainer}>
        <img src={sort} alt="sort" />
      </div>
      <p>Сортировка по:</p>
      <div
        className={classes.activItemSort}
        onClick={() => props.setActiveSortMenu(!props.activeSortMenu)}>
        {activeSort}
      </div>
      <div
        className={
          props.activeSortMenu
            ? `${classes.sortMenuListActive}`
            : `${classes.sortMenuListNotActive}`
        }>
        {sortItemArr.map((item, index) => (
          <div onClick={() => sortClick(item)} className={changeClass(item)} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
