import { FC } from "react";
import Top from "./Top/Top";
import Line from "./Line/Line";
import Bottom from "./Bottom/Bottom";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="container p-[16px] mx-auto">
          <div className="flex flex-col gap-[8px]">
            <Top />
            <Line />
            <Bottom />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
