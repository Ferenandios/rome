import { FC } from "react";
import { toggleIsShowModal } from "../../../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";

const Exit: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { exitIcon } = useAppSelector((state) => state.modal);
  const handleClick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      <button
        className="absolute top-0 right-0 w-[32px] h-[32px]"
        onMouseUp={handleClick}
      >
        <img className="w-full h-full" src={exitIcon} alt="Exit" />
      </button>
    </>
  );
};

export default Exit;
