import React from "react";
import classes from "./BasketItem.module.scss";
import pizza from "../../../assets/img/Main/pizza.png";

export const BasketItem: React.FunctionComponent<{}> = (props) => {
  return (
    <div className={classes.basketListItem}>
      <div className={classes.imgAndTitleBlock}>
        <img src={pizza} alt="pizza" />
        <div className={classes.pizzaTitleDescription}>
          <p>Сырный цыплёнок</p>
          <p>тонкое тесто, 26см.</p>
        </div>
      </div>
      <div className={classes.chooseQuantity}>
        <div>-</div>
        <div>2</div>
        <div>+</div>
      </div>
      <div className={classes.pizzaCost}>770P</div>
      <div className={classes.deletePizza}>+</div>
    </div>
  );
};
