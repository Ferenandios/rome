export type titleType = "Категории" | "Контакты";

export interface IElement {
  id: number;
  text: string;
  link: string;
}

export interface IState {
  categories: IElement[];
  contacts: IElement[];
}
