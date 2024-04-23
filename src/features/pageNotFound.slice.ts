import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/PageNotFound/Content/types";

const initialState: IState = {
  title: "Страница не найдена",
};

const pageNotFountSlice = createSlice({
  name: "pageNotFound",
  initialState,
  reducers: {},
});

export default pageNotFountSlice.reducer;
