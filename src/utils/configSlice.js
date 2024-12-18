import { createSlice } from "@reduxjs/toolkit";
import reducer from "./moviesSlice";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "English",
  },
  reducers: {
    changeLanguage(state, Action) {
      state.lang = Action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
