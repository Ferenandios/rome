export interface ICrumb {
  id: number;
  title: string;
  link: string;
}

export interface IState {
  crumbs: ICrumb[];
}
