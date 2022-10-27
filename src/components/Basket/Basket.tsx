import React from "react";
import classes from "./Basket.module.scss";

import { useAppSelector } from "../../redux/hooks";
import EmptyBasket from "./EmptyBasket";
import BasketWithItems from "./BasketWithItems";

const Basket: React.FC<{}> = () => {
  const pizzasInBasket = useAppSelector((state) => state.basket.items);

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        {pizzasInBasket.length ? <BasketWithItems /> : <EmptyBasket />}
      </div>
    </main>
  );
};

export default Basket;
