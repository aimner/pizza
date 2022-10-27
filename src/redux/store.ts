import { configureStore } from "@reduxjs/toolkit";
import filter from "./slice/filterSlice";
import basket from "./slice/backsetSlice";
import pizzas from "./slice/pizzasSlice";

export const store = configureStore({
  reducer: {
    filter,
    basket,
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
