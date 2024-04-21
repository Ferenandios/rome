import { FC } from "react";
import { ICrumb } from "../../../types/Crumbs/types";
import { NavLink } from "react-router-dom";
import styles from "./Crumb.module.css";

const Crumb: FC<{ crumb: ICrumb }> = ({ crumb }): JSX.Element => {
  return (
    <>
      <NavLink className={styles.button} to={crumb.link}>
        <span className={styles.title}>{crumb.title}</span>
      </NavLink>
    </>
  );
};

export default Crumb;
