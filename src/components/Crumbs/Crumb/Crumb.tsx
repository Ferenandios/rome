import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Crumb.module.css";
import { ICrumb } from "../../../types/types";

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
          {crumb.text}
        </NavLink>
      </div>
    </>
  );
};

export default Crumb;
