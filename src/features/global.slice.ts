import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IService, type IState } from "../types/types";

const initialState: IState = {
  showedPage: "main",
  search: "",
  placeholder: "",
  services: [
    { id: 0, title: "Лазерный рескрой листового металла" },
    { id: 1, title: "Порошковая покраска металлических изделий" },
    { id: 2, title: "Изготовление металлоконструкций" },
    { id: 3, title: "Гибка металла" },
  ],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSearchPlaceholder: (state) => {
      if (state.services.length <= 0) return;
      const randomService: IService =
        state.services[Math.floor(Math.random() * state.services.length)];
      state.placeholder = randomService.title;
    },
  },
});

export default globalSlice.reducer;
export const { setSearch, setSearchPlaceholder } = globalSlice.actions;
