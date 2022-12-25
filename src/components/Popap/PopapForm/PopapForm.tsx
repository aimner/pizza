import React, { useState } from "react";
import classes from "./PopapForm.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  changePopapMode,
  changingActivePizzaSizesOrTypes,
  changingActivePizzaPrice,
  changeFetchPizzas,
  changingLoadingAndError,
  changingActivePizzaTitle,
} from "../../../redux/slice/adminSlice";
import { pizzasArr, sizeArr } from "../../../types/types";
import { clearAllBodyScrollLocks } from "body-scroll-lock";

export const PopapForm: React.FC<{
  setDeletePopap: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setDeletePopap }) => {
  const dispatch = useAppDispatch();

  const activePizza = useAppSelector((state) => state.admin.activePizzaInPopap);

  const loading = useAppSelector((state) => state.admin.loading);

  const loadingError = useAppSelector((state) => state.admin.error);

  const [validateTitle, setValidateTitle] = useState(true);
  const [validatePrice, setValidatePrice] = useState(true);

  const toggleData = <T,>(
    data: number,
    key: T extends "types" | "sizes" ? "types" | "sizes" : never
  ) => {
    let sizesOrTypesArr = activePizza![key] as number[];

    if (sizesOrTypesArr.includes(data)) {
      if (sizesOrTypesArr.length > 1) {
        sizesOrTypesArr = sizesOrTypesArr.filter((item) => item !== data);
        dispatch(changingActivePizzaSizesOrTypes({ sizesOrTypesArr, key }));
      }
    } else {
      sizesOrTypesArr = [...sizesOrTypesArr, data].sort((a: number, b: number) => a - b);
      dispatch(changingActivePizzaSizesOrTypes({ sizesOrTypesArr, key }));
    }
  };

  const findSizes = (size: number) => {
    if (activePizza?.sizes.find((item) => item === size)) return `${classes.pizzTypeMenuItem}`;
    return `${classes.deletedPizzTypeMenuItem}`;
  };

  const findTypes = (pizzaIndex: number) => {
    if (activePizza?.types.includes(pizzaIndex)) return `${classes.pizzTypeMenuItem}`;
    return `${classes.deletedPizzTypeMenuItem}`;
  };

  const saveChanges = async () => {
    if (validateTitle) {
      let i = await dispatch(changeFetchPizzas(activePizza!));
      if (i.meta.requestStatus === "fulfilled") {
        clearAllBodyScrollLocks();
      }
    }
  };

  const changeTitle = (text: string) => {
    text.trim().length >= 1 ? setValidateTitle(true) : setValidateTitle(false);
    dispatch(changingActivePizzaTitle(text));
  };

  const changePrice = (price: number) => {
    price > 0 ? setValidatePrice(true) : setValidatePrice(false);
    dispatch(changingActivePizzaPrice(price));
  };

  return (
    <>
      <div className={classes.popapContainerBlock}>
        {loading ? (
          loadingError ? (
            <div className={classes.errorBlock}>
              <h1 style={{ textAlign: "center" }}>Произошла ошибка при изменении пиццы</h1>
              <button
                className={classes.errorBlockButton}
                onClick={() => dispatch(changingLoadingAndError())}>
                Вернуться назад
              </button>
            </div>
          ) : (
            <h1 style={{ textAlign: "center" }}>Применяются изменения</h1>
          )
        ) : (
          <>
            <div
              className={classes.popapContainerBlockCloseButton}
              onClick={() => {
                dispatch(changePopapMode());
                clearAllBodyScrollLocks();
              }}>
              +
            </div>
            <div className={classes.pizzaListItem}>
              <input
                className={classes.titleInput}
                value={activePizza?.title}
                onChange={(e) => changeTitle(e.target.value)}
                type="text"
              />
              {validateTitle || (
                <strong className={classes.validateText}>
                  Название пиццы должно состоять минимум из 1 символа
                </strong>
              )}
              <div className={classes.pizzTypeMenu}>
                <div className={classes.pizzaTypeBlock}>
                  <span>Тип:</span>
                  {pizzasArr.map((item, index) => (
                    <div
                      className={findTypes(index)}
                      key={index}
                      onClick={() => toggleData<"types">(index, "types")}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={classes.pizzaSizeBlock}>
                  <span>Размер пиццы:</span>
                  {sizeArr.map((item, index) => (
                    <div
                      className={findSizes(item)}
                      key={index}
                      onClick={() => toggleData<"sizes">(item, "sizes")}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={classes.pizzaCostBlock}>
                  <span>Цена:</span>
                  <input
                    className={classes.costInput}
                    value={activePizza?.price}
                    onChange={(e) => changePrice(+e.target.value)}
                    type="number"
                  />
                </div>
                {validatePrice || <strong>Цена пиццы должна быть больше 0</strong>}
              </div>
              <div className={classes.buttonsBlock}>
                <div className={classes.saveButtonBlock}>
                  <div
                    className={
                      validateTitle && validatePrice ? classes.saveButton : classes.notActiveButton
                    }
                    onClick={saveChanges}>
                    Сохранить
                  </div>
                </div>
                <div className={classes.deleteButtonBlock}>
                  <div
                    className={classes.deleteButton}
                    onClick={() => setDeletePopap((value) => !value)}>
                    Удалить
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
