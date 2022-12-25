import React from "react";

import classes from "./PopapConfirmDelete.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changingLoadingAndError, deleteFetchPizzas } from "../../../redux/slice/adminSlice";

import { clearAllBodyScrollLocks } from "body-scroll-lock";

export const PopapConfirmDelete: React.FC<{
  setDeletePopap: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setDeletePopap }) => {
  const dispatch = useAppDispatch();

  const activePizza = useAppSelector((state) => state.admin.activePizzaInPopap);

  const loading = useAppSelector((state) => state.admin.loading);

  const loadingError = useAppSelector((state) => state.admin.error);

  const deletePizza = async () => {
    let i = await dispatch(deleteFetchPizzas(activePizza!))

    if (i.meta.requestStatus === "fulfilled") {
      setDeletePopap(false);
      dispatch(changingLoadingAndError())
      clearAllBodyScrollLocks();
    }
  };

  const closeDeletePopap = () => {
    dispatch(changingLoadingAndError())
    setDeletePopap(false);
  };

  return (
    <div className={classes.confirmDelete}>
      {loading ? (
        loadingError ? (
          <div className={classes.errorBlock}>
            <h1>Произошла ошибка при удалении пиццы</h1>
            <button className={classes.errorBlockButton} onClick={closeDeletePopap}>
              Вернуться назад
            </button>
          </div>
        ) : (
          <div className={classes.errorBlock}>
            <h1 className={classes.loadingText}>Удаляем пиццу</h1>
          </div>
        )
      ) : (
        <>
          {" "}
          <p className={classes.confirmDeleteText}>Удалить пиццу?</p>
          <div className={classes.deleteButton} onClick={deletePizza}>
            Да
          </div>
          <div className={classes.saveButton} onClick={() => setDeletePopap((value) => !value)}>
            Нет
          </div>
        </>
      )}
    </div>
  );
};
