import React, { useState } from "react";
import classes from "./Pizza.module.scss";
import { PizzaType } from "../Pizzas";

export const Pizza: React.FunctionComponent<PizzaType> = (props) => {
  const pizzasArr = ["тонкое", "традиционное"] as const;

  const sizeArr = [26, 30, 40] as const;

  let [activeDough, setActiveDough] = useState("тонкое" as typeof pizzasArr[number]);

  let [activeSize, setActiveSize] = useState(26 as typeof sizeArr[number]);

  let changeClass = (property: typeof sizeArr[number] | typeof pizzasArr[number]) => {
    if (activeDough === property) {
      return `${classes.pizzaTypeMenuItemActive}`;
    }
    if (activeSize === property) {
      return `${classes.pizzaTypeMenuItemActive}`;
    }
    return "";
  };

  return (
    <div className={classes.pizzaListItem}>
      <div className={classes.pizzaImgBlock}>
        <img src={props.imageUrl} alt="pizza" />
      </div>
      <h4>{props.title}</h4>
      <div className={classes.pizzTypeMenu}>
        <div className={classes.pizzaTypeBlock}>
          {props.types.map((item, index) => (
            <div
              onClick={() => setActiveDough(pizzasArr[item])}
              className={changeClass(pizzasArr[item])} key={index}>
              {pizzasArr[item]
              }
            </div>
          ))}
        </div>
        <div className={classes.pizzaSizeBlock}>
          {props.sizes.map((item, index) => (
            <div
              onClick={() => setActiveSize(item as typeof sizeArr[number])}
              className={changeClass(item as typeof sizeArr[number])} key={index}>
              {props.sizes[index]}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.costAndButton}>
        <span>от {props.price}Р</span>
        <div className={classes.addPizaButton}>
          + Добавить <div className={classes.quantityPizzas}>0 </div>
        </div>
      </div>
    </div>
  );
};
