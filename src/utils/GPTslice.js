import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "showGPT",
  initialState: {
    show: false,
  },
  reducers: {
    ToggleshowGPTsearch(state) {
      state.show = !state.show;
    },
  },
});

export const { ToggleshowGPTsearch } = GPTslice.actions;
export default GPTslice.reducer;
