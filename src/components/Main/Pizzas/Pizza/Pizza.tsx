import React, { useState } from "react";
import classes from "./Pizza.module.scss";
import { pizzasArr, PizzaType, PizzaTypeInBasket, sizeArr } from "../../../../types/types";
import { useAppDispatch, useAppSelector } from "./../../../../redux/hooks";
import { addItem } from "../../../../redux/slice/backsetSlice";

export const Pizza: React.FunctionComponent<PizzaType> = (props) => {
  let [activeDough, setActiveDough] = useState(
    pizzasArr[props.types[0]] as typeof pizzasArr[number]
  );
  let [activeSize, setActiveSize] = useState(props.sizes[0] as typeof sizeArr[number]);
  const dispatch = useAppDispatch();

  const pizzas = useAppSelector((state) => state.basket.items);

  let pizza: PizzaTypeInBasket | undefined = pizzas.find(
    (item) =>
      JSON.stringify(item.sortValue) ===
      JSON.stringify({ id: props.id, size: activeSize, type: activeDough })
  );

  let changeClass = (property: typeof sizeArr[number] | typeof pizzasArr[number]) => {
    if (activeDough === property) {
      return `${classes.pizzaTypeMenuItemActive}`;
    }
    if (activeSize === property) {
      return `${classes.pizzaTypeMenuItemActive}`;
    }
    return "";
  };

  const onClickAdd = () => {
    dispatch(
      addItem({
        sortValue: {
          id: props.id,
          size: activeSize,
          type: activeDough,
        },
        imageUrl: props.imageUrl,
        title: props.title,
        price: props.price,
        count: 1,
      })
    );
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
              className={changeClass(pizzasArr[item])}
              key={index}>
              {pizzasArr[item]}
            </div>
          ))}
        </div>
        <div className={classes.pizzaSizeBlock}>
          {props.sizes.map((item, index) => (
            <div
              onClick={() => setActiveSize(item as typeof sizeArr[number])}
              className={changeClass(item as typeof sizeArr[number])}
              key={index}>
              {props.sizes[index]}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.costAndButton}>
        <span>
          от <b>{props.price}Р</b>
        </span>
        <div className={classes.addPizaButton} onClick={onClickAdd}>
          + Добавить{" "}
          {pizza?.count ? <div className={classes.quantityPizzas}>{pizza?.count}</div> : ""}
        </div>
      </div>
    </div>
  );
};
