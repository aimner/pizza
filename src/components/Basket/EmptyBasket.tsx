import React from "react";
import { Link } from "react-router-dom";
import emptyBasket from "../../assets/img/Main/noPizzas.png";
import classes from "./Basket.module.scss"
import path from "../../assets/img/Main/path.svg";

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
      <Link to="/pizza/items" className={classes.link}>
          <div className={classes.backButton}>
            <img src={path} alt="path" />
            <p>Вернуться назад</p>
          </div>
        </Link>
    </div>
  );
};

export default EmptyBasket;
