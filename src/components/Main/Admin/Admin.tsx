import React, { useState } from "react";
import classes from "./Admin.module.scss";
import { useAppDispatch, useAppSelector } from './../../../redux/hooks';
import {changeAdminMode} from '../../../redux/slice/adminSlice'

export const Admin: React.FC = () => {
  const dispatch = useAppDispatch()
  const adminMode = useAppSelector(state => state.admin.activeAdminMode)


  return (
    <div
      className={adminMode ? classes.offAdminMod : classes.onAdminMode}
      onClick={() => dispatch(changeAdminMode())}>
      {adminMode ? "Выключить режим администратора" : "Включить режим администратора"}
    </div>
  );
};
