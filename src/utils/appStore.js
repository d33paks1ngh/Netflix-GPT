import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import showGPTReducer from "./GPTslice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    showGPT: showGPTReducer,
  },
});

export default appStore;
