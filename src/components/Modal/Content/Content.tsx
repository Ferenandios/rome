import { FC } from "react";
import Top from "./Top/Top";
import Inner from "./Inner/Inner";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <div className="relative right-0 w-full h-full bg-white box-border">
        <Top />
        <Inner />
      </div>
    </>
  );
};

export default Content;
