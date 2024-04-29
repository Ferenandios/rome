import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types/Modal/types";

import exitIconAsset from "/src/assets/Modal/Exit.svg";

const initialState: IState = {
  title: "Обратная связь",
  exitIcon: exitIconAsset,
  infoText: "Отправьте нам сообщение, либо позвоните!",
  layout: [
    "материал не должен иметь коррозии и заломов",
    "допустимый прогиб листа на длине 2500 мм не должен превышать 50 мм",
    "заготовка должна иметь прямоугольную форму",
    "желательно предоставление чертежей разверток или иной документации в формате DXF или в формате AutoCAD, при отсутствии документации в этих форматах, мы можем помочь Вам их разработать, стоимость подготовки документации определяется для каждого заказа индивидуально, в некоторых случаях мы можем сделать это бесплатно",
  ],
};

const modalSlice = createSlice({ name: "modal", initialState, reducers: {} });

export default modalSlice.reducer;
