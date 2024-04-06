import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleIsShowContact } from "../../features/global.slice";

const Message: FC = (): JSX.Element => {
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
        className={`animate-bounce md:hidden fixed z-30 bottom-[15px] right-[15px] flex justify-center items-center 
          w-[50px] h-[50px] rounded-full`}
      >
        <img className="w-[47%]" src={logoIcon} alt="Write" />
      </button>
    </>
  );
};

export default Message;
