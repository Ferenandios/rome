export interface IService {
  id: number;
  title: string;
  image: string;
}

interface IContacts {
  phones: string[];
  emails: string[];
}

export interface IState {
  showedPage: "main" | "catalog";
  search: string;
  placeholder: string;
  services: IService[];
  burgerIsOpen: boolean;
  contacts: IContacts;
  companyName: string;
  colorTheme: string;
  isShowContact: boolean;
  isShowMessage: boolean;
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
