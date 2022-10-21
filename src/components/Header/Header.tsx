import React from "react";
import classes from "./Header.module.scss";
import basket from "./../../assets/img/Header/basket.svg";
import logo from "./../../assets/img/Header/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Search } from "./Search/Search";
import { useAppSelector } from "../../redux/hooks";

export const Header: React.FunctionComponent<{}> = (props) => {
  let params = useLocation();
  const pizzasInBasket = useAppSelector((state) => state.basket.items);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);
  const status = useAppSelector((state) => state.pizzas.status);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/pizza" className={classes.link}>
          <div className={classes.logoAndTitle}>
            <img src={logo} alt="LOGO" className={classes.logo} />
            <div>
              <h2 className={classes.pizzaTitle}>REACT PIZZA</h2>
              <p>выбери свою пиццу</p>
            </div>
          </div>
        </Link>

        {params.pathname === "/basket" || !status ? null : (
          <>
            <Search />
            <Link to="/basket" className={classes.link}>
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
