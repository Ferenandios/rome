import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type IState } from "../types/types";
import { IService } from "./../types/types";

import companyLogoAsset from "/logo.jpg";
import serviceImage0 from "/src/assets/Services/0.jpg";
import serviceImage1 from "/src/assets/Services/1.jpg";
import serviceImage2 from "/src/assets/Services/2.jpg";
import serviceImage3 from "/src/assets/Services/3.jpg";

const initialState: IState = {
  showedPage: "catalog",
  search: "",
  placeholder: "",
  services: [
    {
      id: 0,
      title: "Лазерный рескрой листового металла",
      image: serviceImage0,
    },
    {
      id: 1,
      title: "Порошковая покраска металлических изделий",
      image: serviceImage1,
    },
    { id: 2, title: "Изготовление металлоконструкций", image: serviceImage2 },
    { id: 3, title: "Гибка металла", image: serviceImage3 },
  ],
  currentService: {
    id: -1,
    title: "",
    image: "https://placehold.co/600x400/EEE/31343C?text=404",
  },
  burgerIsOpen: false,
  contacts: {
    phones: ["+73466671691", "214848", "214840"],
    emails: ["remiksnv@yandex.ru"],
  },
  companyName: "ООО «РЕМИКС»",
  companyLogo: companyLogoAsset,
  companyAddress: "г. Нижневартовск, ул. Индустриальная 14, стр. 13",
  colorTheme: "#4D7E6C",
  isShowModal: false,
  isShowMessage: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSearchPlaceholder: (state) => {
      if (state.services.length <= 0) {
        state.placeholder = "Введите название услуги";
        return;
      }
      const randomService: IService =
        state.services[Math.floor(Math.random() * state.services.length)];
      state.placeholder = randomService.title;
    },
    toggleBurgerIsOpen: (state) => {
      state.burgerIsOpen = !state.burgerIsOpen;
    },
    toggleIsShowModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    toggleIsShowMessage: (state) => {
      state.isShowMessage = !state.isShowMessage;
    },
    setCurrentService: (state, action: PayloadAction<IService>) => {
      state.currentService = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const {
  setSearch,
  setSearchPlaceholder,
  toggleBurgerIsOpen,
  toggleIsShowModal,
  toggleIsShowMessage,
  setCurrentService,
} = globalSlice.actions;
