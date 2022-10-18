import React from "react";
import classes from "./Pizzas.module.scss";
import { Pizza } from "./Pizza/Pizza";
import MyLoader from "./../../Preload/Skeleton";
import { PizzaType } from "../../../types/types";
import { counterSlice } from "./../../../redux/slice/slice";



type PropsType = {
  pizzasArr: PizzaType[];
  setPizzasArr: React.Dispatch<React.SetStateAction<PizzaType[]>>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  searchText: string;
};

export const Pizzas: React.FunctionComponent<PropsType> = (props) => {
  const arr = [1, 2, 3, 4];

  return (

      <div className={classes.pizzaContainer}>
        <h3 className={classes.allPizzas}>Все пиццы</h3>
        <div className={classes.pizzaList}>
          {props.loader
            ? arr.map((item, index) => <MyLoader key={index}></MyLoader>)
            : props.pizzasArr
                .filter((item) => item.title.toLowerCase().includes(props.searchText))
                .map((item, index) => <Pizza {...item} key={index}></Pizza>)}
        </div>
      </div>

  );
};
