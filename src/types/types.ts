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
