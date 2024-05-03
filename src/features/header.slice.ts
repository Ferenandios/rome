import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/Header/types";

import shapeAsset from "/src/assets/Header/Shape.svg";

const initialState: IState = {
  searchIcon: shapeAsset,
  buttonText: "Обратная связь",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
});

export default headerSlice.reducer;
