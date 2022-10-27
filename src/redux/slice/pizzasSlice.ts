import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaType } from "../../types/types";

export const fetchPizzas = createAsyncThunk("pizzas/fetchPizzas", async (parameters: string) => {
  let response = await axios.get<PizzaType[]>(
    `https://633c4943f11701a65f734ada.mockapi.io/items${parameters}&limit=4`
  );
  return response.data;
});

const initialState: initialState = {
  items: [],
  loading: true,
  status: true,
};

type initialState = {
  items: PizzaType[];
  loading: boolean;
  status: boolean;
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    changeLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<PizzaType[]>) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPizzas.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = false;
    });
  },
});

export const { changeLoading } = pizzasSlice.actions;

export default pizzasSlice.reducer;
