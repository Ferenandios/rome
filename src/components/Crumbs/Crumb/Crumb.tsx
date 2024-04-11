import { FC } from "react";
import { ICrumb } from "../../../types/Crumbs/types";
import { NavLink } from "react-router-dom";

const Crumb: FC<{ crumb: ICrumb }> = ({ crumb }): JSX.Element => {
  return (
    <>
      <NavLink
        className="flex justify-center items-center w-1/3 h-[30px]  border-l border-l-[#8E8E8E] first:border-none"
        to={crumb.link}
      >
        <span className="py-[6px]">{crumb.title}</span>
      </NavLink>
    </>
  );
};

export default Crumb;