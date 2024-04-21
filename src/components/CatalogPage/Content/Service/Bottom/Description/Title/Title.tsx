import { FC } from "react";
import styles from "./Title.module.css";

const Title: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <div>
        <h2 className={styles.title}>{text}</h2>
      </div>
    </>
  );
};

export default Title;
