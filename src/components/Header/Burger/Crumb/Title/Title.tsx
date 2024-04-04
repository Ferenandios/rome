import { FC } from "react";

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="w-[calc(100vw-34px)]">
        <h3 className="font-semibold text-[18px]">{title}</h3>
      </div>
    </>
  );
};

export default Title;
