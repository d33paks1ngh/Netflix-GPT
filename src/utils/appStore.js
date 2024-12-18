import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import showGPTReducer from "./GPTslice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    showGPT: showGPTReducer,
    config: configReducer,
  },
});

export default appStore;
