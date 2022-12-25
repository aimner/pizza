import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaType } from "../../types/types";
import { fetchPizza, deletePizza } from "../slice/pizzasSlice";

export const changeFetchPizzas = createAsyncThunk(
  "admin/changeFetchPizzas",
  async (pizza: PizzaType, thunkApi) => {
    let response = await axios.put<PizzaType>(
      `https://633c4943f11701a65f734ada.mockapi.io/items/${pizza.id}`,
      {
        ...pizza,
      }
    );

    await thunkApi.dispatch(fetchPizza(pizza.id));

    return response.data;
  }
);

export const deleteFetchPizzas = createAsyncThunk(
  "admin/deleteFetchPizzas",
  async (pizza: PizzaType, thunkApi) => {
    let response = await axios.delete<PizzaType>(
      `https://633c4943f11701a65f734ada.mockapi.io/items/${pizza.id}`
    );

    thunkApi.dispatch(deletePizza(pizza));

    return response.data;
  }
);

type initialState = {
  activeAdminMode: boolean;
  activePopapMode: boolean;
  activePizzaInPopap: PizzaType | null;
  loading: boolean;
  error: boolean;
};

export const initialState: initialState = {
  activeAdminMode: false,
  activePopapMode: false,
  activePizzaInPopap: null,
  loading: false,
  error: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    changeAdminMode: (state) => {
      state.activeAdminMode = !state.activeAdminMode;
    },
    changePopapMode: (state) => {
      state.activePopapMode = !state.activePopapMode;
    },
    changeActivePizzaInPopap: (state, action: PayloadAction<PizzaType>) => {
      state.activePizzaInPopap = action.payload;
    },
    changingActivePizzaSizesOrTypes: (
      state,
      action: PayloadAction<{ sizesOrTypesArr: number[]; key: "types" | "sizes" }>
    ) => {
      state.activePizzaInPopap![action.payload.key] = action.payload.sizesOrTypesArr;
    },
    changingActivePizzaPrice: (state, action: PayloadAction<number>) => {
      state.activePizzaInPopap!.price = action.payload;
    },
    changingActivePizzaTitle: (state, action: PayloadAction<string>) => {
      state.activePizzaInPopap!.title = action.payload
    },
    changingLoadingAndError: (state) => {
      state.error = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeFetchPizzas.fulfilled, (state) => {
      state.activePopapMode = !state.activePopapMode;
      state.loading = false;
    });
    builder.addCase(changeFetchPizzas.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeFetchPizzas.rejected, (state, action) => {
      state.error = true;
    });
    builder.addCase(deleteFetchPizzas.fulfilled, (state) => {
      state.activePopapMode = !state.activePopapMode;
      state.loading = false;
    });
    builder.addCase(deleteFetchPizzas.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteFetchPizzas.rejected, (state) => {
      state.error = true;
    });
  },
});

export const {
  changeAdminMode,
  changePopapMode,
  changeActivePizzaInPopap,
  changingActivePizzaSizesOrTypes,
  changingActivePizzaPrice,
  changingLoadingAndError,
  changingActivePizzaTitle
} = adminSlice.actions;

export default adminSlice.reducer;
