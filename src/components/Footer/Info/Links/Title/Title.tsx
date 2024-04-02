import { FC } from "react";

const Title: FC<{ title: string }> = ({ title }): JSX.Element => {
  return (
    <div className="flex flex-col gap-[4px]">
      <h3 className="font-bold text-[12px] tracking-[5%]">{title}</h3>
    </div>
  );
};

export default Title;
