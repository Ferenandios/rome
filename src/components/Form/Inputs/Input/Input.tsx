import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import { IInput } from "../../../../types/Form/types";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="flex flex-col">
        <p className="font-bold">{input.title}</p>
        <input
          style={{ borderColor: colorTheme }}
          className="font-bold w-full h-[36px] border-[2px] rounded-[7px] pl-[4px]"
          placeholder={input.placeholder}
          type={input.type}
          required
        />
      </div>
    </>
  );
};

export default Input;
