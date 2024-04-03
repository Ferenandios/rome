import { FC } from "react";
import { ICrumbText } from "../../../../../types/types";

const Text: FC<ICrumbText> = ({ text, active }): JSX.Element => {
  return (
    <>
      <p className={`${active && "font-semibold"} text-[16px]`}>{text}</p>
    </>
  );
};

export default Text;