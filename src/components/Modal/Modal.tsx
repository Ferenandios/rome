import { FC } from "react";
import { useAppSelector } from "../../hooks";
import Content from "./Content/Content";
import Shit from "./Shit/Shit";

const Modal: FC = (): JSX.Element => {
  const { isShowModal } = useAppSelector((state) => state.global);
  return (
    <>
      <Shit />
      <div
        style={{ width: isShowModal ? "100vw" : "0vw" }}
        className="absolute z-50 top-0 flex justify-end w-screen h-screen duration-500"
      >
        <div className="relative w-full h-full">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Modal;
