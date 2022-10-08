import React, { useState } from "react";
import classes from "./Main.module.scss";
import { Menu } from "./Menu/Menu";
import { SortMenu } from "./SortMenu/SortMenu";
import { Pizzas } from "./Pizzas/Pizzas";


type PropsType = {
  activeSortMenu: boolean;
  setActiveSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Main: React.FunctionComponent<PropsType> = (props) => {

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.menuContainer}>
          <Menu />
          <SortMenu {...props} />
        </div>
        <Pizzas />
      </div>
    </main>
  );
};
