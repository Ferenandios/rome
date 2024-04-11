import { FC } from "react";
import { toggleIsShowModal } from "../../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

const Button: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme } = useAppSelector((state) => state.global);
  const { buttonText } = useAppSelector((state) => state.header);
  const handleCLick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      <div className="hidden md:flex items-center h-full">
        <button
          onMouseUp={handleCLick}
          style={{ backgroundColor: colorTheme }}
          className="text-white text-[14px] min-w-[177px] max-w-[290px] h-[30px] rounded-full whitespace-nowrap overflow-hidden lg:h-[50px]"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Button;
