import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/Form/types";

const initialState: IState = {
  inputList: [
    { id: 0, type: "text", title: "Имя", placeholder: "Введите Ваше имя" },
    { id: 1, type: "email", title: "Почта", placeholder: "Введите Вашу почту" },
    {
      id: 2,
      type: "tel",
      title: "Телефон",
      placeholder: "Введите Ваш телефон",
    },
  ],
  textareaList: [
    {
      id: 0,
      placeholder: "Введите Ваш комментарий здесь",
      title: "Комментарий",
    },
  ],
  buttonText: "Отправить",
};

const formSlice = createSlice({ name: "form", initialState, reducers: {} });

export default formSlice.reducer;
