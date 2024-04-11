import { FC } from "react";
import { toggleIsShowModal } from "../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const Button: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme } = useAppSelector((state) => state.global);
  const { logoIcon } = useAppSelector((state) => state.message);
  const handleClick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      <button
        onMouseUp={handleClick}
        style={{ backgroundColor: colorTheme }}
        className="z-20 flex justify-center items-center w-full h-full rounded-full cursor-pointer"
      >
        <img className="w-[47%]" src={logoIcon} alt="Write" />
      </button>
    </>
  );
};

export default Button;
