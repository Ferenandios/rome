import { createSlice } from "@reduxjs/toolkit";
import { type IState } from "../types/types";

const initialState: IState = {
  showedPage: "main",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export default globalSlice.reducer;
