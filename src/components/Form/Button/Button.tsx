import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const Button: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  const { buttonText } = useAppSelector((state) => state.form);
  const handleClick = () => {
    alert(true);
  };
  return (
    <>
      <div
        style={{ backgroundColor: colorTheme }}
        className="flex justify-center items-center w-full h-[50px] rounded-[7px]"
      >
        <button
          onClick={handleClick}
          className="font-bold text-white text-[20px]"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Button;
