import React from "react";
import classes from "./Error.module.scss";

export const ErrorComponent: React.FC<{}> = () => {
  return (
    <div className={classes.error}>
      <h1>Произошла ошибка при загрузке пицц</h1>
      <p>
        <b>Попробуйте перезагрузить страницу или зайти позже.</b>
      </p>
      <div></div>
    </div>
  );
};
