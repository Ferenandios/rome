import { FC } from "react";
import { toggleIsShowContact } from "../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const Button: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme } = useAppSelector((state) => state.global);
  const { logoIcon } = useAppSelector((state) => state.message);
  const handleClick = () => {
    dispatch(toggleIsShowContact());
  };
  return (
    <>
      <button
        onMouseUp={handleClick}
        style={{ backgroundColor: colorTheme }}
        className="flex justify-center items-center w-full h-full rounded-full"
      >
        <img className="w-[47%]" src={logoIcon} alt="Write" />
      </button>
    </>
  );
};

export default Button;
