import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../features/global.slice";
import headerSlice from "../features/header.slice";
import footerSlice from "../features/footer.slice";
import mainContentSlice from "../features/mainContent.slice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    header: headerSlice,
    mainContent: mainContentSlice,
    footer: footerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
