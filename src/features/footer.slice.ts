import { createSlice } from "@reduxjs/toolkit";
import { type IState } from "../types/Footer/types";

const initialState: IState = {
  categoryTitle: "Категории",
  contactsTitle: "Контакты",
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
};

const footerSlice = createSlice({ name: "footer", initialState, reducers: {} });

export default footerSlice.reducer;
