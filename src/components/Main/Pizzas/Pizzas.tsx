import React from "react";
import classes from "./Pizzas.module.scss";
import { Pizza } from "./Pizza/Pizza";
import MyLoader from "./../../Preload/Skeleton";
import { PizzaType } from "../../../types/types";

import { useAppSelector } from "../../../redux/hooks";

type PropsType = {
  pizzasArr: PizzaType[];
};

export const Pizzas: React.FC<PropsType> = (props) => {
  const arr = [1, 2, 3, 4];

  const loader = useAppSelector((state) => state.pizzas.loading);
  const numberOnPaginationButton = useAppSelector((state) => state.filter.numberOnPaginationButton);
  const numberOfPizzasShown = useAppSelector((state) => state.filter.numberOfPizzasShown);

  const firstPage = (numberOnPaginationButton - 1) * numberOfPizzasShown;
  const lastPage = numberOnPaginationButton * numberOfPizzasShown;

  return (
    <div className={classes.pizzaContainer}>
      <h3 className={classes.allPizzas}>Все пиццы</h3>
      <div className={classes.pizzaList}>
        {loader
          ? arr.map((item, index) => <MyLoader key={index}></MyLoader>)
          : props.pizzasArr
              .slice(firstPage, lastPage)
              .map((item, index) => <Pizza {...item} key={item.id}></Pizza>)}
      </div>
    </div>
  );
};
