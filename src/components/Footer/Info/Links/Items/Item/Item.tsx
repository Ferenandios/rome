import { FC } from "react";
import { IFooterLinksText } from "../../../../../../types/types";

const Item: FC<IFooterLinksText> = ({ text }): JSX.Element => {
  return (
    <>
      <a href="#" className="text-[12px]">
        {text}
      </a>
    </>
  );
};

export default Item;
