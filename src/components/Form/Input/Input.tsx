import { FC } from "react";
import { IFormInputList } from "../../../types/types";
import { useAppSelector } from "../../../hooks";

const Input: FC<{ input: IFormInputList }> = ({ input }): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="flex flex-col">
        <p className="font-bold">{input.title}</p>
        <input
          style={{ borderColor: colorTheme }}
          className="w-full h-[36px] border-[2px] "
          placeholder={input.placeholder}
          type="text"
        />
      </div>
    </>
  );
};

export default Input;
