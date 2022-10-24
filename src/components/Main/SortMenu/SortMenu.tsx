import React from "react";
import sort from "../../../assets/img/Header/sort.svg";
import { changeDescendingSort, changeSort } from "../../../redux/slice/filterSlice";
import { sortItemArr, sortItemUrlArr, sortOrderArr } from "../../../types/types";
import { useAppDispatch, useAppSelector } from "./../../../redux/hooks";
import classes from "./SortMenu.module.scss";



type PropsType = {
  activeSortMenu: boolean;
  setActiveSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SortMenu: React.FC<PropsType> = (props) => {


  const dispatch = useAppDispatch();

  const activeSort = useAppSelector((state) => state.filter.sortType);
  const activeDescendingSort = useAppSelector((state) => state.filter.descendingSortType);

  let changeClass = (property: typeof sortItemUrlArr[number]) => {
    if (activeSort === property) {
      return `${classes.sortMenuListItemActive}`;
    }
  };

  const onChangeSortType = (item: typeof sortItemUrlArr[number]) => {
    dispatch(changeSort(item));
  };

  const onchangeDescendingSort = (item: typeof sortOrderArr[number]) => {
    dispatch(changeDescendingSort(item))
  }

  return (
    <div className={classes.sortMenu}>
      <div
        className={classes.sortImgContainer}
        onClick={() =>
          onchangeDescendingSort(
            activeDescendingSort === sortOrderArr[0] ? sortOrderArr[1] : sortOrderArr[0]
          )
        }>
        <img
          src={sort}
          alt="sort"
          className={activeDescendingSort === sortOrderArr[0] ? classes.sortReverse : ""}
        />
      </div>
      <p>Сортировка по:</p>
      <div
        className={classes.activItemSort}
        onClick={() => props.setActiveSortMenu((value) => !value)}>
        {sortItemArr[sortItemUrlArr.indexOf(activeSort)]}
      </div>
      <div
        className={
          props.activeSortMenu
            ? `${classes.sortMenuListActive}`
            : `${classes.sortMenuListNotActive}`
        }>
        {sortItemUrlArr.map((item, index) => (
          <div onClick={() => onChangeSortType(item)} className={changeClass(item)} key={index}>
            {sortItemArr[index]}
          </div>
        ))}
      </div>
    </div>
  );
};
