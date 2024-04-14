import React, { FC } from "react";

const Text: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <li className="font-bold text-[14px] w-full">{text}</li>
    </>
  );
};

export default Text;
