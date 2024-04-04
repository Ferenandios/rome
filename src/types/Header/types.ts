export type titleType = "Контакты" | "Навигация";

export interface IElement {
  id: number;
  text: string;
  link: string;
}

export interface IState {
  contacts: IElement[];
  navigation: IElement[];
  searchIcon: string;
  activeElementId: number;
}
