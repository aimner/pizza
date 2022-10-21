import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortItemUrlArr, sortOrderArr } from "../../types/types";

const initialState: initialState = {
  category: 0,
  sortType: "rating",
  descendingSortType: "asc",
  searchValue: "",
  mounted: false,
  numberOnPaginationButton: 1,
  numberOfPizzasShown: 4
};

type initialState = {
  category: number;
  sortType: typeof sortItemUrlArr[number];
  descendingSortType: typeof sortOrderArr[number];
  searchValue: string;
  mounted: boolean;
  numberOnPaginationButton: number;
  numberOfPizzasShown: number
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
      state.mounted = true;
      state.numberOnPaginationButton = 1;
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
    chanheNumberOnPaginationButton: (state, action: PayloadAction<boolean>) => {
      action.payload ? state.numberOnPaginationButton++ : state.numberOnPaginationButton--;
    },
  },
});

export const {
  changeCategory,
  changeSort,
  changeDescendingSort,
  changeSearchValue,
  chanheNumberOnPaginationButton,
} = filterSlice.actions;

export default filterSlice.reducer;
