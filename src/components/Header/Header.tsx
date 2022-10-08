import React, { useState } from "react";
import classes from "./Header.module.scss";
import basket from "./../../assets/img/Header/basket.svg";
import logo from "./../../assets/img/Header/logo.svg";
import { Link, useLocation, useParams } from "react-router-dom";

export const Header: React.FunctionComponent<{}> = () => {
  let params = useLocation();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="" className={classes.link}>
          <div className={classes.logoAndTitle}>
            <img src={logo} alt="LOGO" className={classes.logo} />
            <div>
              <h2 className={classes.pizzaTitle}>REACT PIZZA</h2>
              <p>выбери свою пиццу</p>
            </div>
          </div>
        </Link>
        {params.pathname === "/basket" ? null : (
          <Link to="/basket" className={classes.link}>
            <div className={classes.basket}>
              <div>520P</div>
              <div className={classes.verticalLine}></div>
              <div className={classes.basketImgBlock}>
                <img src={basket} alt="basket" className={classes.basketImg} />
                <span>3</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};
