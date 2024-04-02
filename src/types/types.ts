export interface IService {
  id: number;
  title: string;
}

export interface IState {
  showedPage: "main";
  search: string;
  placeholder: string;
  services: IService[];
}
