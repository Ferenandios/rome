import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const Button: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  const { buttonText } = useAppSelector((state) => state.header);
  return (
    <>
      <div className="hidden md:flex items-center h-full">
        <button
          style={{ backgroundColor: colorTheme }}
          className="text-white text-[14px] min-w-[177px] max-w-[290px] h-[30px] rounded-full whitespace-nowrap overflow-hidden"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Button;
