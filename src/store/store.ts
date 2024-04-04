import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../features/global.slice";
import headerSlice from "../features/header.slice";

export const store = configureStore({
  reducer: { global: globalSlice, header: headerSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
