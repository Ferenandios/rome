import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/MainPage/Content/types";

const initialState: IState = {
  title: "Наши услуги",
  emptyServicesTitle: "Услуги отсутствуют",
};

const mainContentSlice = createSlice({
  name: "mainContent",
  initialState,
  reducers: {},
});

export default mainContentSlice.reducer;
