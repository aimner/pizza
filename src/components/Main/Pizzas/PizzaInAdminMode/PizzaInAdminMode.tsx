import React from "react";

import classes from "./PizzaInAdminMode.module.scss";
import { pizzasArr, PizzaType } from "../../../../types/types";
import { useAppDispatch } from "./../../../../redux/hooks";
import { changePopapMode, changeActivePizzaInPopap } from "../../../../redux/slice/adminSlice";
import { disableBodyScroll } from "body-scroll-lock";

type PropsType = {
  targetElement: React.RefObject<HTMLDivElement>;
  pizza: PizzaType
}


export const PizzaInAdminMode: React.FC<PropsType> = ({pizza, targetElement}) => {
 
  const dispatch = useAppDispatch();

  const openPopap = () => {
    disableBodyScroll(targetElement.current!)
    dispatch(changePopapMode());
    dispatch(changeActivePizzaInPopap(pizza));
  }

  return (
    <div className={classes.pizzaListItem}>
      <div className={classes.pizzaImgBlock}>
        <img src={pizza.imageUrl} alt="pizza" />
      </div>
      <h4>{pizza.title}</h4>
      <div className={classes.pizzTypeMenu}>
        <div className={classes.pizzaTypeBlock}>
          <span>Тип:</span>

          {pizza.types.map((item, index) => (
            <div className={classes.pizzTypeMenuItem} key={index}>
              {pizzasArr[item]}
            </div>
          ))}
        </div>

        <div className={classes.pizzaSizeBlock}>
          <span>Размер пиццы:</span>
          {pizza.sizes.map((item, index) => (
            <div className={classes.pizzTypeMenuItem} key={index}>
              {pizza.sizes[index]}
            </div>
          ))}
        </div>
        <div className={classes.pizzaCostBlock}>
          <span>Цена:</span>
          <div className={classes.pizzTypeMenuItem}>{pizza.price}P</div>
        </div>
      </div>
      <div className={classes.costAndButton}>
        <div
          className={classes.changePizaButton}
          onClick={openPopap}>
          Изменить
        </div>
      </div>
    </div>
  );
};
