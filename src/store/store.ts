import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../features/form.slice";
import globalSlice from "../features/global.slice";
import headerSlice from "../features/header.slice";
import mainContentSlice from "../features/mainContent.slice";
import messageSlice from "../features/message.slice";
import modalSlice from "../features/modal.slice";
import pageNotFoundSlice from "../features/pageNotFound.slice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    header: headerSlice,
    mainContent: mainContentSlice,
    message: messageSlice,
    modal: modalSlice,
    form: formSlice,
    pageNotFound: pageNotFoundSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
