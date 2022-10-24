import React from "react";
import classes from "./Menu.module.scss";
import { category } from "./../../../types/types";
import { useAppDispatch, useAppSelector } from "./../../../redux/hooks";
import { changeCategory } from "../../../redux/slice/filterSlice";

const menuText = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Сезонные"] as const;

export const Menu: React.FunctionComponent<{}> = () => {
  const dispatch = useAppDispatch();

  const activeCategory = useAppSelector((state) => state.filter.category);

  let changeClass = (property: typeof category[number]) => {

    if (activeCategory === property) {
      return `${classes.menuListItemActive}`;
    }
  };

  const onChangeCategoryType = (item: number) => {
    dispatch(changeCategory(item));
  };

  return (
    <ul className={classes.menuList}>
      {menuText.map((item, index) => (
        <li
          onClick={() => onChangeCategoryType(index)}
          className={changeClass(index as typeof category[number])}
          key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
