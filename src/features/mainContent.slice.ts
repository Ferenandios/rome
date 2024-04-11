import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/MainPage/Content/types";

const initialState: IState = {
  title: "Наш ассортимент",
  emptyServicesTitle: "Ассортимент отсутствует",
};

const mainContentSlice = createSlice({
  name: "mainContent",
  initialState,
  reducers: {},
});

export default mainContentSlice.reducer;
