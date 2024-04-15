import { FC } from "react";

const ListItem: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <li className="font-inter font-bold text-[14px]">{text}</li>
    </>
  );
};

export default ListItem;
