import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/Message/types";
import iconAsset from "/src/assets/Message/Write.svg";

const initialState: IState = {
  logoIcon: iconAsset,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
});

export default messageSlice.reducer;
