import { FC } from "react";
import Shit from "./Shit/Shit";
import Title from "./Title/Title";
import Exit from "./Exit/Exit";
import { useAppSelector } from "../../hooks";

const Modal: FC = (): JSX.Element => {
  const { isShowModal } = useAppSelector((state) => state.global);
  return (
    <>
      <div
        className={`absolute z-50 top-0 ${
          isShowModal ? "w-screen" : "w-0"
        } h-screen overflow-hidden origin-right duration-500`}
      >
        <div className="relative w-full h-full">
          <Shit />
          <div className={`absolute right-0 w-full h-full bg-white p-[16px]`}>
            <div className="relative">
              <Exit />
              <Title />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
