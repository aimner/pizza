import React from "react";
import { PizzaType } from "../../../types/types";
import classes from "./Paginate.module.scss";


type PropsType = {
  activeButton: number;
  setActiveButton: React.Dispatch<React.SetStateAction<number>>;
  pizzasArr: PizzaType[]
};

export const Paginate: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div className={classes.paginateBlock}>
      <div
        onClick={() => {
          if (props.activeButton > 1) props.setActiveButton(props.activeButton - 1);
        }}
        className={
          props.activeButton === 1 ? `${classes.item} ${classes.itemNotActive}` : classes.item
        }>
        {"<"}
      </div>
      <ul className={classes.numbersBlock}>
        <li className={`${classes.item} ${classes.itemActive}`}>{props.activeButton}</li>
      </ul>
      <div
        onClick={() => {
          if (props.activeButton < 5) props.setActiveButton(props.activeButton + 1);
        }}
        className={
          props.activeButton === 5 ? `${classes.item} ${classes.itemNotActive}` : classes.item
        }>
        {">"}
      </div>
    </div>
  );
};
