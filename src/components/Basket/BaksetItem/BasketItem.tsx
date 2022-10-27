import React from "react";
import classes from "./BasketItem.module.scss";
import { PizzaTypeInBasket } from "../../../types/types";
import { addItem, deleteItem, clearAllItemCertainCategory } from "../../../redux/slice/backsetSlice";
import { useAppDispatch } from './../../../redux/hooks';




export const BasketItem: React.FC<PizzaTypeInBasket> = (props) => {
  const dispatch = useAppDispatch()

  const onClickAdd = () => {
    dispatch(
      addItem({
        sortValue: {
          id: props.sortValue.id,
          size: props.sortValue.size,
          type: props.sortValue.type,
        },
        imageUrl: props.imageUrl,
        title: props.title,
        price: props.price,
        count: 1,
      })
    );
  };

  return (
    <div className={classes.basketListItem}>
      <div className={classes.imgAndTitleBlock}>
        <img src={props.imageUrl} alt="pizza" />
        <div className={classes.pizzaTitleDescription}>
          <b>{props.title}</b>
          <p>{props.sortValue.type} <br/> {props.sortValue.size}см.</p>
        </div>
      </div>
      <div className={classes.chooseQuantity}>
        <div onClick={() => dispatch(deleteItem(props))}>-</div>
        <div>{props.count}</div>
        <div onClick={onClickAdd}>+</div>
      </div>
      <div className={classes.pizzaCost}><b>{props.count * props.price}</b> P</div>
      <div className={classes.deletePizza} onClick={() => dispatch(clearAllItemCertainCategory(props))}>+</div>
    </div>
  );
};
