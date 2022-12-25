import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  themeStatus: "dark" | "light";
};

const initialState: InitialState = {
  themeStatus: (localStorage.getItem("theme") as "light" | "dark") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.themeStatus = action.payload === "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
