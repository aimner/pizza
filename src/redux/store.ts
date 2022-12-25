import { configureStore } from "@reduxjs/toolkit";
import filter from "./slice/filterSlice";
import basket from "./slice/backsetSlice";
import pizzas from "./slice/pizzasSlice";
import admin from "./slice/adminSlice"
import theme from "./slice/themeSlice"

export const store = configureStore({
  reducer: {
    filter,
    basket,
    pizzas,
    admin,
    theme
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
