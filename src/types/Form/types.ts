type formInputListTypeType = "name" | "email" | "phone";

export interface IInput {
  id: number;
  type: formInputListTypeType;
  title: string;
  placeholder: string;
}

export interface ITextarea {
  id: number;
  title: string;
  text: string;
  placeholder: string;
}

export interface IState {
  inputList: IInput[];
  textareaList: ITextarea[];
  buttonText: string;
}
