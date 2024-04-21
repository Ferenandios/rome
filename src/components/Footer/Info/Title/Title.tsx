import { FC } from "react";
import styles from "./Title.module.css";

const Title: FC<{ title: string }> = ({ title }): JSX.Element => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Title;
