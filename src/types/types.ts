type descriptionTypeType = "title" | "p" | "ul";

export interface IDescription {
  type: descriptionTypeType;
  text: string[];
}

export interface IGalleryItem {
  id: number;
  image: string;
}

export interface IService {
  id: number;
  title: string;
  image: string;
  description: IDescription[];
  layout: string[];
  galleryItems: IGalleryItem[];
  keywords: string;
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
  text: string;
  email: string;
  tel: string;
  message: string;
}

export interface IState {
  search: string;
  placeholder: string;
  services: IService[];
  currentService: IService;
  burgerIsOpen: boolean;
  contacts: IContacts;
  companyName: string;
  companyLogo: string;
  companyAddress: string;
  colorTheme: string;
  isShowModal: boolean;
  isShowMessage: boolean;
  crumbs: ICrumb[];
  submit: ISubmit;
}
