import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../features/global.slice";
import headerSlice from "../features/header.slice";
import footerSlice from "../features/footer.slice";
import mainContentSlice from "../features/mainContent.slice";
import messageSlice from "../features/message.slice";
import crumbsSlice from "../features/crumbs.slice";
import modalSlice from "../features/modal.slice";
import formSlice from "../features/form.slice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    header: headerSlice,
    mainContent: mainContentSlice,
    footer: footerSlice,
    message: messageSlice,
    crumbs: crumbsSlice,
    modal: modalSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
