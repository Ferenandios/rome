import { FC } from "react";
import Shit from "./Shit/Shit";
import Title from "./Title/Title";
import Exit from "./Exit/Exit";

const Modal: FC = (): JSX.Element => {
  return (
    <>
      <div className="absolute z-50 top-0">
        <div className="relative w-screen h-screen">
          <Shit />
          <div className="absolute right-0 w-[440px] h-screen bg-white p-[16px]">
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
