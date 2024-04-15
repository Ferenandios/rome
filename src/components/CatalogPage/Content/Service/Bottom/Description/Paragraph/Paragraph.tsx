import { FC } from "react";

const Paragraph: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <div>
        <p className="font-inter text-[14px]">{text}</p>
      </div>
    </>
  );
};

export default Paragraph;
