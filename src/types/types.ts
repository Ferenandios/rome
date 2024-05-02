type descriptionTypeType = "title" | "p" | "ul";

export interface IDescription {
  type: descriptionTypeType;
  text: string[];
}

export interface IService {
  id: number;
  title: string;
  image: string;
  description: IDescription[];
  layout: string[];
}

interface IContacts {
  phones: string[];
  emails: string[];
}

export interface ICrumb {
  id: number;
  text: string;
  link: string;
}

export interface ISubmit {
  name: string;
  email: string;
  phone: string;
  text: string;
}

export interface IState {
  showedPage: "main" | "catalog";
  search: string;
  placeholder: string;
  services: IService[];
  currentService: IService;
  burgerIsOpen: boolean;
  contacts: IContacts;
  companyName: string;
  companyLogo: string;
  companyAddress: string;
  sendTo: string;
  colorTheme: string;
  isShowModal: boolean;
  isShowMessage: boolean;
  crumbs: ICrumb[];
  submit: ISubmit;
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
