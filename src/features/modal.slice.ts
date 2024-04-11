import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/Modal/types";

const initialState: IState = {
  title: "Обратная связь",
};

const modalSlice = createSlice({ name: "modal", initialState, reducers: {} });

export default modalSlice.reducer;
