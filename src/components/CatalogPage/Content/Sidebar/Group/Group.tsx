import { FC } from "react";
import { type IService } from "../../../../../types/types";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../../../hooks";

const Group: FC<{ service: IService }> = ({ service }): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <NavLink
        to={`/rome/catalog/${service.id}`}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? colorTheme : "",
            color: isActive ? "white" : "",
          };
        }}
        className="flex items-center w-full p-[8px] rounded-l-[9px] rounded-r-[3px]"
      >
        <h3 className="font-bold text-[14px] text-wrap">{service.title}</h3>
      </NavLink>
    </>
  );
};

export default Group;
