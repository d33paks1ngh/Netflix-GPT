import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "showGPT",
  initialState: {
    show: false,
    MovieNames: null,
    MovieResults: null,
  },
  reducers: {
    ToggleshowGPTsearch(state) {
      state.show = !state.show;
    },
    addGptMovieResult(state, action) {
      state.MovieResults = action.payload;
    },
    addGptMovieName(state, action) {
      state.MovieNames = action.payload;
    },
  },
});

export const { ToggleshowGPTsearch, addGptMovieResult, addGptMovieName } =
  GPTslice.actions;
export default GPTslice.reducer;
