import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
  view: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    onViewChange: (state, action) => {
      Object.assign(state.view, action.payload);
    },
  },
});

export const { onViewChange } = globalSlice.actions;

export const globalSelector = (state: RootState) => state.globalSlice;

export default globalSlice.reducer;
