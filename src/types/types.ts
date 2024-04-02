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
