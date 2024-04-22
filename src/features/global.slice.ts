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
      description: [
        { type: "title", text: ["Описание товара"] },
        {
          type: "p",
          text: [
            "Лазерная резка металлов – одна из передовых технологий в направлении раскроя листового металла. На сегодняшний день это самый прогрессивный метод имеет основные преимущества:",
          ],
        },
        {
          type: "ul",
          text: [
            "Высокая точность. Достигается точность реза до 0,1 мм. Это позволяет выполнять сложные геометрические формы реза.",
            "Высокое качество поверхности. Лазерная резка обеспечивает ровную и аккуратную поверхность с минимальными металлическими окалинами, что позволяет использовать заготовку без дополнительной обработки.",
            "Широкий диапазон материалов. Лазер может резать практически любой листовой металл, включая сталь, алюминий, медь, нержавеющую сталь и т. д.",
            "Высокая производительность. Скорость лазерной резки позволяет обрабатывать большие объёмы заготовок в короткие сроки.",
            "Отсутствие механических нагрузок. Лазер обеспечивает мягкую, бесконтактную обработку металла, что позволяет избежать его повреждений и деформаций.",
            "На нашем производстве работают лазерные станки ЧПУ мощностью до 8 кВт, способный обеспечить высокую точность при раскрое металла толщиной от 0,5 до 30 мм. С максимальным размером листа 1500*3000 мм.",
            "Вам не нужно быть инженером-конструктором, чтобы заказать у нас услуги по резке листового металла. ",
          ],
        },
        {
          type: "title",
          text: ["Требования к материалам заказчика"],
        },
        {
          type: "ul",
          text: [
            "материал не должен иметь коррозии и заломов",
            "допустимый прогиб листа на длине 2500 мм не должен превышать 50 мм",
            "заготовка должна иметь прямоугольную форму",
          ],
        },
        {
          type: "p",
          text: [
            "Предприятия, которые оказывают услуги по лазерной резке листового металла, в основном требуют готовые чертежи в специальном формате. Нам достаточно эскиза, нарисованного от руки и общее понимание задуманного. Все остальное мы сделаем сами, а вы получаете готовую деталь!",
          ],
        },
        { type: "title", text: ["Связаться с нами"] },
      ],
      layout: [
        "Начните с того, что свяжитесь с нами по телефону, электронной почте или оставьте заявку на сайте.",
        "Расскажите нам о вашем проекте и предоставьте нам детали, такие как размеры, материал и количество.",
        "Наши эксперты помогут вам выбрать наилучший материал и настроить параметры для вашего проекта.",
        "Если вам нравится наше предложение, подтвердите заказ, и мы приступим к работе.",
        "Мы организуем доставку вашего заказа в удобное для вас место.",
      ],
    },
    {
      id: 1,
      title: "Порошковая покраска металлических изделий",
      image: serviceImage1,
      description: [],
      layout: [
        "Начните с того, что свяжитесь с нами по телефону, электронной почте или оставьте заявку на сайте.",
        "Расскажите нам о вашем проекте и предоставьте нам детали, такие как размеры, материал и количество.",
        "Наши эксперты помогут вам выбрать наилучший материал и настроить параметры для вашего проекта.",
        "Если вам нравится наше предложение, подтвердите заказ, и мы приступим к работе.",
        "Мы организуем доставку вашего заказа в удобное для вас место.",
      ],
    },
    {
      id: 2,
      title: "Изготовление металлоконструкций",
      image: serviceImage2,
      description: [],
      layout: [],
    },
    {
      id: 3,
      title: "Гибка металла",
      image: serviceImage3,
      description: [],
      layout: [],
    },
  ],
  currentService: {
    id: -1,
    title: "",
    image: "",
    description: [],
    layout: [],
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
    setCurrentService: (state, { payload }: PayloadAction<IService>) => {
      state.currentService = payload;
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
