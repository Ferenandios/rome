import { FC, useEffect } from "react";
import {
  toggleIsShowMessage,
  toggleIsShowModal,
} from "../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Animation from "./Animation/Animation";
import Button from "./Button/Button";

const Message: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme, isShowMessage } = useAppSelector((state) => state.global);
  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleIsShowMessage());
    }, 3000);
  }, [dispatch]);
  const handleClick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      {isShowMessage && (
        <button
          onClick={handleClick}
          style={{ background: colorTheme + "33" }}
          className="md:hidden animate-widgetVisible fixed z-20 bottom-[35px] right-[35px] flex justify-center items-center bg-opacity-20 w-[69px] h-[69px] rounded-full"
        >
          <div className="relative w-[56px] h-[56px]">
            <Animation />
            <Button />
          </div>
        </button>
      )}
    </>
  );
};

export default Message;