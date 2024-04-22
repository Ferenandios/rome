import { FC } from "react";
import { ICrumb } from "../../../types/Crumbs/types";
import { NavLink } from "react-router-dom";
import styles from "./Crumb.module.css";

const Crumb: FC<{ crumb: ICrumb }> = ({ crumb }): JSX.Element => {
  return (
    <>
      <div className={styles.button}>
        <NavLink
          to={crumb.link}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
          className={styles.title}
        >
          {crumb.title}
        </NavLink>
      </div>
    </>
  );
};

export default Crumb;
