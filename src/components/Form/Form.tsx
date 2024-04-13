import { FC } from "react";
import { IFormInputList } from "../../types/types";
import Input from "./Input/Input";

const Form: FC<{ width?: number }> = ({ width }): JSX.Element => {
  const inputList: IFormInputList[] = [
    { id: 0, title: "Имя", placeholder: "Введите Ваше имя" },
    { id: 1, title: "Почта", placeholder: "Введите Вашу почту" },
    { id: 2, title: "Телефон", placeholder: "Введите Ваш телефон" },
  ];
  return (
    <div className="w-full">
      {inputList.map((input) => (
        <Input key={input.id} input={input} />
      ))}
    </div>
  );
};

export default Form;
