import React, { useEffect, useState } from "react";
import classes from "./Pizzas.module.scss";
import { Pizza } from "./Pizza/Pizza";
import MyLoader from "./../../Preload/Skeleton";
import { Context } from "./../../../App";

export type PizzaType = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export const Pizzas: React.FunctionComponent<{}> = (props) => {
  let [pizzasArr, setPizzasArr] = useState([] as PizzaType[]);
  let [loader, setLoader] = useState(true);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    fetch("https://633c4943f11701a65f734ada.mockapi.io/items", {
      method: "GET",
    })
      .then((value) => value.json())
      .then((value) => {
        setPizzasArr([...value]);
        setLoader(false);
      });
  }, []);

  return (
    <Context.Consumer>
      {(value) => {
        return (
          <div className={classes.pizzaContainer}>
            <h3 className={classes.allPizzas}>Все пиццы</h3>
            <div className={classes.pizzaList}>
              {loader
                ? arr.map((item, index) => <MyLoader key={index}></MyLoader>)
                : pizzasArr.map((item, index) => <Pizza {...item} key={index}></Pizza>)}
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};
