import { FC } from "react";

const Title: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <div>
        <h2 className="font-bold text-[20px]">{text}</h2>
      </div>
    </>
  );
};

export default Title;
