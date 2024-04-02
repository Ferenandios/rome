import { FC } from "react";
import { type IFooterLinksList } from "../../../../types/types";
import Title from "./Title/Title";
import Items from "./Items/Items";

const Links: FC<IFooterLinksList> = ({ styles, title, text }): JSX.Element => {
  // ! FIX styles.text
  // ! FIX styles.text
  // ! FIX styles.text
  // ! FIX styles.text
  return (
    <div style={{ textAlign: `${styles.text}` }}>
      <Title title={title} />
      <Items items={text} />
    </div>
  );
};

export default Links;
