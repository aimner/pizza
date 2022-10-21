import React from "react";
import classes from "./Basket.module.scss";



import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "./../../redux/hooks";
import EmptyBasket from "./EmptyBasket";
import BasketWithItems from "./BasketWithItems";

const Basket: React.FunctionComponent<{}> = () => {
  const pizzasInBasket = useAppSelector((state) => state.basket.items);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);

  const dispatch = useAppDispatch();

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        {pizzasInBasket.length ? <BasketWithItems /> : <EmptyBasket />}
      </div>
    </main>
  );
};

export default Basket;
