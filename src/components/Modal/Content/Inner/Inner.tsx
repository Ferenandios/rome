import { FC } from "react";
import Info from "./Info/Info";
import Send from "./Send/Send";

const Inner: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <Info />
        <Send />
      </div>
    </>
  );
};

export default Inner;
