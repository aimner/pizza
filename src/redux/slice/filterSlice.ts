import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortItemUrlArr, sortOrderArr } from "../../types/types";

const initialState: initialState = {
  category: 0,
  sortType: "rating",
  descendingSortType: "asc",
  searchValue: "",
  mounted: false,
};

type initialState = {
  category: number;
  sortType: typeof sortItemUrlArr[number];
  descendingSortType: typeof sortOrderArr[number];
  searchValue: string;
  mounted: boolean;
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
      state.mounted = true;
    },
    changeSort: (state, action: PayloadAction<typeof sortItemUrlArr[number]>) => {
      state.sortType = action.payload;
      state.mounted = true;
    },
    changeDescendingSort: (state, action: PayloadAction<typeof sortOrderArr[number]>) => {
      state.descendingSortType = action.payload;
      state.mounted = true;
    },
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.mounted = true;
    },
  },
});

export const { changeCategory, changeSort, changeDescendingSort, changeSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
