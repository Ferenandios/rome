import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/Modal/types";

import exitIconAsset from "/src/assets/Modal/Exit.svg";

const initialState: IState = {
  title: "Обратная связь",
  exitIcon: exitIconAsset,
  infoText: "Отправьте нам сообщение, либо позвоните!",
  layout: [
    "Расскажите нам о вашем проекте и предоставьте нам детали, такие как      размеры, материал и количество.",
    "Наши эксперты помогут вам выбрать наилучший материал и настроить      параметры для вашего проекта.",
    "Если вам нравится наше предложение, подтвердите заказ, и мы приступим к работе.",
    "Мы организуем доставку вашего заказа в удобное для вас место.",
  ],
};

const modalSlice = createSlice({ name: "modal", initialState, reducers: {} });

export default modalSlice.reducer;
