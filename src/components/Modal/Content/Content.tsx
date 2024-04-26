import { FC } from "react";
import Inner from "./Inner/Inner";
import Top from "./Top/Top";
import { useAppSelector } from "../../../hooks";

const Content: FC = (): JSX.Element => {
  const { isShowModal, colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div
        style={{ width: isShowModal ? "500px" : "0" }}
        className="absolute right-0 z-50 top-0 flex justify-end w-0 h-screen duration-500 overflow-hidden"
      >
        <div
          style={{ borderColor: colorTheme }}
          className="absolute flex flex-col w-[500px] h-screen bg-white border-b-[35px] gap-[8px] p-[16px]"
        >
          <Top />
          <Inner />
        </div>
      </div>
    </>
  );
};

export default Content;
