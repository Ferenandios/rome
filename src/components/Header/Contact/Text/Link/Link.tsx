import { FC } from "react";
import { IElement } from "../../../../../types/Header/types";

const Link: FC<{ contact: IElement }> = ({ contact }): JSX.Element => {
  return (
    <>
      <a
        className="text-[12px] text-right max-w-[230px] whitespace-nowrap overflow-hidden xl:text-[14px]"
        href={contact.link}
      >
        {contact.text}
      </a>
    </>
  );
};

export default Link;
