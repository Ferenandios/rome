import { FC } from "react";
import Title from "./Title/Title";
import Image from "./Image/Image";

const Top: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <Image />
        <Title />
      </div>
    </>
  );
};

export default Top;
