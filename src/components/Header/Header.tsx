import React, { useEffect, useRef } from "react";
import classes from "./Header.module.scss";
import basket from "./../../assets/img/Header/basket.svg";
import logo from "./../../assets/img/Header/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Search } from "./Search/Search";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changeCategory,
  changeDescendingSort,
  changeSort,
  setNumberOnPaginationButton,
} from "../../redux/slice/filterSlice";

export const Header: React.FC<{}> = () => {
  let params = useLocation();

  const pizzasInBasket = useAppSelector((state) => state.basket.items);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);
  const status = useAppSelector((state) => state.pizzas.status);
  const dispatch = useAppDispatch();

  const isMounted = useRef(false);

  const onChangeParams = () => {
    dispatch(changeCategory(0));
    dispatch(changeSort("rating"));
    dispatch(changeDescendingSort("desc"));
    dispatch(setNumberOnPaginationButton(1));
  };

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("pizzas", JSON.stringify(pizzasInBasket));
    }
    isMounted.current = true;
  }, [pizzasInBasket]);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link
          to="/pizza/items?sortBy=rating&order=desc&page=1"
          onClick={onChangeParams}
          className={classes.link}>
          <div className={classes.logoAndTitle}>
            <img src={logo} alt="LOGO" className={classes.logo} />
            <div>
              <h2 className={classes.pizzaTitle}>REACT PIZZA</h2>
              <p>выбери свою пиццу</p>
            </div>
          </div>
        </Link>

        {params.pathname === "/pizza/basket" || !status ? null : (
          <>
            <Search />
            <Link to="/pizza/basket" className={classes.link}>
              <div className={classes.basket}>
                <div>{totalPrice}P</div>
                <div className={classes.verticalLine}></div>
                <div className={classes.basketImgBlock}>
                  <img src={basket} alt="basket" className={classes.basketImg} />
                  <span>{pizzasInBasket.reduce((sum, item) => sum + item.count, 0)}</span>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
