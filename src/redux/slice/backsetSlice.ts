import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaTypeInBasket, SortValueType } from "../../types/types";

function getPizzasFromLS(): { pizzas: PizzaTypeInBasket[]; totalPrice: number } {
  let pizzas: PizzaTypeInBasket[] = JSON.parse(localStorage.getItem("pizzas")!) || [];
  let totalPrice = pizzas.reduce((sum, item) => sum + item.price * item.count, 0);
  return {
    pizzas,
    totalPrice,
  };
}

const initialState: initialState = {
  totalPrice: getPizzasFromLS().totalPrice,
  items: getPizzasFromLS().pizzas,
};

type initialState = {
  totalPrice: number;
  items: PizzaTypeInBasket[];
};

function compare(obj1: SortValueType, obj2: SortValueType, bol: boolean): boolean {
  if (bol) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  } else {
    return JSON.stringify(obj1) !== JSON.stringify(obj2);
  }
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<PizzaTypeInBasket>) => {
      const pizza = state.items.find((item) =>
        compare(item.sortValue, action.payload.sortValue, true)
      );

      if (pizza) {
        pizza.count++;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count, 0);
    },
    deleteItem: (state, action: PayloadAction<PizzaTypeInBasket>) => {
      const pizza = state.items.find((item) =>
        compare(item.sortValue, action.payload.sortValue, true)
      );

      if (pizza && pizza.count > 1) {
        pizza.count--;
      } else {
        state.items = state.items.filter((item) =>
          compare(item.sortValue, action.payload.sortValue, false)
        );
      }
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count, 0);
    },
    clearAllItem: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

    clearAllItemCertainCategory: (state, action: PayloadAction<PizzaTypeInBasket>) => {
      state.items = state.items.filter((item) =>
        compare(item.sortValue, action.payload.sortValue, false)
      );
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count, 0);
    },
  },
});

export const { addItem, deleteItem, clearAllItem, clearAllItemCertainCategory } =
  basketSlice.actions;

export default basketSlice.reducer;
