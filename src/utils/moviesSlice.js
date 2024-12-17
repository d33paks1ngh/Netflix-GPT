import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
    popular: null,
    topRated: null,
    upcoming: null,
    popularTV: null,
    topRatedTV: null,
    trendingMovies: null,
    trendingTV: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addPopularTV: (state, action) => {
      state.popularTV = action.payload;
    },
    addtopRatedTV: (state, action) => {
      state.topRatedTV = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTrendinTV: (state, action) => {
      state.trendingTV = action.payload;
    },
  },
});

export const {
  addNowPlayMovies,
  addNowPlayTrailer,
  addPopular,
  addTopRated,
  addUpcoming,
  addPopularTV,
  addtopRatedTV,
  addTrendinTV,
  addTrendingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
