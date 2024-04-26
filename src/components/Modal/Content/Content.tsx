import { FC } from "react";
import Inner from "./Inner/Inner";
import Top from "./Top/Top";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <div className="absolute w-[500px] h-screen bg-lime-200 p-[16px]">
        <Top />
        <Inner />
      </div>
    </>
  );
};

export default Content;
