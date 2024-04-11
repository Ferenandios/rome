import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/Modal/types";

import exitIconAsset from "/src/assets/Modal/Exit.svg";

const initialState: IState = {
  title: "Обратная связь",
  exitIcon: exitIconAsset,
};

const modalSlice = createSlice({ name: "modal", initialState, reducers: {} });

export default modalSlice.reducer;
