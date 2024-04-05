import { createSlice } from "@reduxjs/toolkit";
import { type IState } from "../types/Footer/types";

import logoIcon from "/logo.jpg";

const initialState: IState = {
  categories: [
    { id: 0, text: "Главная", link: "/" },
    { id: 1, text: "Каталог оборудования", link: "/catalog" },
    { id: 2, text: "Обратная связь", link: "/contacts" },
  ],
  contacts: [
    {
      id: 0,
      text: "+7 (346) 667-16-91",
      link: "tel:+73466671691",
    },
    {
      id: 1,
      text: "21-48-48",
      link: "tel:214848",
    },
    {
      id: 2,
      text: "21-48-40",
      link: "tel:214840",
    },
    {
      id: 3,
      text: "remiksnv@yandex.ru",
      link: "mailto:remiksnv@yandex.ru",
    },
  ],
  logoIcon: logoIcon,
};

const footerSlice = createSlice({ name: "footer", initialState, reducers: {} });

export default footerSlice.reducer;
