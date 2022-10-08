import React from "react";
import classes from "./Footer.module.scss";

export const Footer: React.FunctionComponent<{}> = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>Footer</div>
    </footer>
  );
};
