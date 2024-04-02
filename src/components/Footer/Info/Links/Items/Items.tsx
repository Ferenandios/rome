import { FC } from "react";
import Item from "./Item/Item";
import { type IFooterLinksText } from "../../../../../types/types";

const Items: FC<{ items: IFooterLinksText[] }> = ({ items }): JSX.Element => {
  return (
    <>
      <div className="flex flex-col">
        {items.map((text, index) => (
          <Item key={index} text={text.text} />
        ))}
      </div>
    </>
  );
};

export default Items;
