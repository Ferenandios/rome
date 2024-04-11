import { FC } from "react";
import { Link } from "react-router-dom";
import { IElement } from "../../../../types/Footer/types";

const Links: FC<{ element: IElement }> = ({ element }): JSX.Element => {
  return (
    <div className="flex flex-col gap-[4px] lg:max-w-[200px] lg:whitespace-nowrap overflow-hidden">
      <Link className="text-[12px]" to={element.link}>
        {element.text}
      </Link>
    </div>
  );
};

export default Links;
