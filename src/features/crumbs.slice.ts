import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/Crumbs/types";

const initialState: IState = {
  crumbs: [
    { id: 0, title: "Главная", link: "/rome" },
    { id: 1, title: "Каталог оборудования", link: "/rome/catalog" },
    { id: 2, title: "Обратная связь", link: "/rome/contacts" },
  ],
};

const crumbsSlice = createSlice({ name: "crumbs", initialState, reducers: {} });

export default crumbsSlice.reducer;
