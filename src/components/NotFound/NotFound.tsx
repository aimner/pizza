import React, { useEffect, useState } from "react";
import classes from "./NotFound.module.scss";

export const NotFound: React.FC<{}> = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.section}>
            <div>Ничего не найдено</div>
            <div>К сожалению такой страницы в нашем интернет-магазине нету</div>
        </div>
      </div>
    </main>
  );
};
