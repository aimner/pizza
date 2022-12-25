import React, { useState } from "react";
import { createPortal } from "react-dom";
import classes from "./Popap.module.scss";
import { PopapConfirmDelete } from "./PopapConfirmDelete/PopapConfirmDelete";
import { PopapForm } from "./PopapForm/PopapForm";

const modal = document.getElementById("modal") as HTMLDivElement;

export const Modal: React.FC = () => createPortal(<Popap />, modal);

export const Popap: React.FC = () => {
  const [deletePopap, setDeletePopap] = useState(false);

  return (
    <div className={classes.popap}>
      <div className={classes.popapContainer}>
        {deletePopap ? (
          <PopapConfirmDelete setDeletePopap={setDeletePopap} />
        ) : (
          <PopapForm setDeletePopap={setDeletePopap} />
        )}
      </div>
    </div>
  );
};
