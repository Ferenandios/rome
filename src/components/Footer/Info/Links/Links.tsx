import { FC } from "react";
import { type IFooterLinksList } from "../../../../types/types";
import Title from "./Title/Title";
import Items from "./Items/Items";

const Links: FC<IFooterLinksList> = ({ styles, title, text }): JSX.Element => {
  return (
    <div
      className="flex flex-col gap-[4px]"
      style={{ textAlign: `${styles.text}` }}
    >
      <Title title={title} />
      <Items items={text} />
    </div>
  );
};

export default Links;
