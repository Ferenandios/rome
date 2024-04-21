import { FC } from "react";
import { type IService } from "../../../../../types/types";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../../../hooks";
import styles from "./Group.module.css";

const Group: FC<{ service: IService }> = ({ service }): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <NavLink
        to={`/rome/catalog/${service.id}`}
        style={({ isActive }) => ({
          backgroundColor: isActive ? colorTheme : "",
          color: isActive ? "white" : "",
        })}
        className={styles.button}
      >
        <h3 className={styles.title}>{service.title}</h3>
      </NavLink>
    </>
  );
};

export default Group;
