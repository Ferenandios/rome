import { FC } from "react";
import { Link } from "react-router-dom";
import { IElement } from "../../../../types/Footer/types";
import styles from "./Links.module.css";

const Links: FC<{ element: IElement }> = ({ element }): JSX.Element => {
  return (
    <div className={styles.ansoc}>
      <Link className={styles.link} to={element.link}>
        {element.text}
      </Link>
    </div>
  );
};

export default Links;
