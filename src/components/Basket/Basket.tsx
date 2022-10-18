import React from "react";
import classes from "./Basket.module.scss";
import basket from "../../assets/img/Main/basket.svg";
import can from "../../assets/img/Main/can.svg";

import { NavLink} from "react-router-dom";
import path from "../../assets/img/Main/path.svg";
import { BasketItem } from './BaksetItem/BasketItem';

const Basket: React.FunctionComponent<{}> = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.basketControl}>
          <div className={classes.basketTitlImg}>
            <img src={basket} alt="basket" />
            <h4>Корзина</h4>
          </div>
          <div className={classes.clearBasket}>
            <img src={can} alt="garbage can" />
            <p>очистить корзину</p>
          </div>
        </div>
        <div className={classes.basketList}>
          <BasketItem />
        </div>
        <div className={classes.totalData}>
          <div className={classes.totalQuantity}>
            Всего пицц: <span className={classes.totalQuantityText}>2 шт.</span>
          </div>
          <div className={classes.totalСost}>
            Сумма заказа: <span className={classes.totalСostText}>1540Р</span>
          </div>
        </div>
        <div className={classes.basketButtons}>
          <NavLink to="/" className={classes.link}>
            <div className={classes.backButton}>
              <img src={path} alt="path" /> 
              <p>Вернуться назад</p>
            </div>
          </NavLink>
          <div className={classes.payButton}>Оплатить сейчас</div>
        </div>
      </div>
    </main>
  );
};

export default Basket
