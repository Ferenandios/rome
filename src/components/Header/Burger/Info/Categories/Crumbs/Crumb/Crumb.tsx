import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Crumb.module.css";
import { type ICrumb } from "../../../../../../../types/types";

const Crumb: FC<{ crumb: ICrumb }> = ({ crumb }): JSX.Element => {
  return (
    <div className={styles.ansoc}>
      <Link className={styles.link} to={crumb.link}>
        {crumb.text}
      </Link>
    </div>
  );
};

export default Crumb;
