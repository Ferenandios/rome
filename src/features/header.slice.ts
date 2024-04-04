import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../types/Header/types";

import shapeAsset from "/src/assets/Header/Shape.svg";

const initialState: IState = {
  contacts: [
    {
      id: 0,
      text: "+7 (346) 667-16-91",
      link: "tel:+73466671691",
    },
    {
      id: 1,
      text: "remiksnv@yandex.ru",
      link: "mailto:remiksnv@yandex.ru",
    },
  ],
  navigation: [
    { id: 0, text: "Главная", link: "/" },
    {
      id: 1,
      text: "Каталог оборудования",
      link: "/catalog",
    },
    {
      id: 2,
      text: "Обратная связь",
      link: "/contacts",
    },
  ],
  searchIcon: shapeAsset,
  activeElementId: 0,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
});

export default headerSlice.reducer;