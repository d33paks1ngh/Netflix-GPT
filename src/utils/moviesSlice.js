import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
  },
});

export const { addNowPlayMovies, addNowPlayTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
