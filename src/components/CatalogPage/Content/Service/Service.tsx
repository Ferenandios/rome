import { FC } from "react";
import Bottom from "./Bottom/Bottom";
import Line from "./Line/Line";
import Top from "./Top/Top";

const Service: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center gap-[8px] lg:items-start">
        <Top />
        <Line />
        <Bottom />
      </div>
    </>
  );
};

export default Service;
