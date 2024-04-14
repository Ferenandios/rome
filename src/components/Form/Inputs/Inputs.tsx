import { FC } from "react";
import Input from "./Input/Input";
import { useAppSelector } from "../../../hooks";

const Inputs: FC = (): JSX.Element => {
  const { inputList } = useAppSelector((state) => state.form);
  return (
    <>
      <div className="flex flex-col w-full gap-[4px]">
        {inputList.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </div>
    </>
  );
};

export default Inputs;
