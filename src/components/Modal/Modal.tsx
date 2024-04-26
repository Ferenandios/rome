import { FC } from "react";
import Content from "./Content/Content";
import Shit from "./Shit/Shit";
import { useAppSelector } from "../../hooks";

const Modal: FC = (): JSX.Element => {
  const { isShowModal } = useAppSelector((state) => state.global);
  return (
    <>
      <Shit />
      <div
        style={{ width: isShowModal ? "500px" : "0" }}
        className="absolute right-0 z-50 top-0 flex justify-end w-0 h-screen duration-500 overflow-hidden"
      >
        <Content />
      </div>
    </>
  );
};

export default Modal;
