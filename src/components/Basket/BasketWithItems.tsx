import React from "react";
import classes from "./Basket.module.scss";
import basket from "../../assets/img/Main/basket.svg";
import can from "../../assets/img/Main/can.svg";
import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "./../../redux/hooks";
import { clearAllItem } from "../../redux/slice/backsetSlice";
import { BasketItem } from "./BaksetItem/BasketItem";
import { Link } from "react-router-dom";
import path from "../../assets/img/Main/path.svg";

const BasketWithItems: React.FC<{}> = () => {
  const pizzasInBasket = useAppSelector((state) => state.basket.items);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);

  const dispatch = useAppDispatch();
  return (
    <>
      <div className={classes.basketControl}>
        <div className={classes.basketTitlImg}>
          <img src={basket} alt="basket" />
          <h4>Корзина</h4>
        </div>
        <div className={classes.clearBasket} onClick={() => dispatch(clearAllItem())}>
          <img src={can} alt="garbage can" />
          <p>очистить корзину</p>
        </div>
      </div>
      <div className={classes.basketList}>
        {pizzasInBasket.map((item) => (
          <BasketItem {...item} key={item.sortValue.size + item.sortValue.type + item.sortValue.id} />
        ))}
      </div>
      <div className={classes.totalData}>
        <div className={classes.totalQuantity}>
          Всего пицц:{" "}
          <b className={classes.totalQuantityText}>
            {pizzasInBasket.reduce((sum, item) => sum + item.count, 0)} шт.
          </b>
        </div>
        <div className={classes.totalСost}>
          Сумма заказа: <b className={classes.totalСostText}>{totalPrice}Р</b>
        </div>
      </div>
      <div className={classes.basketButtons}>
        <Link to="/pizza/items" className={classes.link}>
          <div className={classes.backButton}>
            <img src={path} alt="path" />
            <p>Вернуться назад</p>
          </div>
        </Link>
        <div className={classes.payButton}>Оплатить сейчас</div>
      </div>
    </>
  );
};

export default BasketWithItems;
