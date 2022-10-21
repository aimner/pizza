import React from "react";
import emptyBasket from "../../assets/img/Main/noPizzas.png";
import classes from "./Basket.module.scss"

const EmptyBasket = () => {
  return (
    <div className={classes.emptyBasket}>
      <h1>Корзина пустая</h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <div>
        <img src={emptyBasket} alt="empty_basket" />
      </div>
    </div>
  );
};

export default EmptyBasket;
