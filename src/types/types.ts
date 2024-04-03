export interface IService {
  id: number;
  title: string;
  image: string;
}

export interface IState {
  showedPage: "main";
  search: string;
  placeholder: string;
  services: IService[];
  burgerIsOpen: boolean;
}

export interface IFooterLinksText {
  text: string;
}

export interface IFooterLinksStyles {
  text: "left" | "right";
}

export interface IFooterLinksList {
  title: string;
  text: IFooterLinksText[];
  styles: IFooterLinksStyles;
}

export interface ICrumbText {
  text: string;
  active: boolean;
}

export interface ICrumb {
  title: string;
  text: ICrumbText[];
}
