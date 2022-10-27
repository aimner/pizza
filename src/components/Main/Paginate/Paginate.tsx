import React from "react";
import { PizzaType } from "../../../types/types";
import classes from "./Paginate.module.scss";
import { useAppDispatch, useAppSelector } from "./../../../redux/hooks";
import { chanheNumberOnPaginationButton } from "../../../redux/slice/filterSlice";

type PropsType = {
  pizzasArr: PizzaType[];
};

export const Paginate: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();

  const numberOfPizzasShown = useAppSelector((state) => state.filter.numberOfPizzasShown);
  const numberOnPaginationButton = useAppSelector((state) => state.filter.numberOnPaginationButton);

  const pizzasArrLength = props.pizzasArr.length;

  return (
    <div className={classes.paginateBlock}>
      <div
        onClick={() => {
          if (numberOnPaginationButton > 1) dispatch(chanheNumberOnPaginationButton(false));
        }}
        className={
          numberOnPaginationButton === 1 ? `${classes.item} ${classes.itemNotActive}` : classes.item
        }>
        {"<"}
      </div>
      <ul className={classes.numbersBlock}>
        <li className={`${classes.item} ${classes.itemActive}`}>{numberOnPaginationButton}</li>
      </ul>
      <div
        onClick={() => {
          if (numberOnPaginationButton < pizzasArrLength / numberOfPizzasShown)
            dispatch(chanheNumberOnPaginationButton(true));
        }}
        className={
          numberOnPaginationButton >= pizzasArrLength / numberOfPizzasShown
            ? `${classes.item} ${classes.itemNotActive}`
            : classes.item
        }>
        {">"}
      </div>
    </div>
  );
};
