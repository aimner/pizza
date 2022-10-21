import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/slice";
import filter from "./slice/filterSlice";
import basket from "./slice/backsetSlice";
import pizzas from "./slice/pizzasSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter,
    basket,
    pizzas
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
