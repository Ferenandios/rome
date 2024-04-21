import { FC } from "react";
import styles from "./Text.module.css";

const Text: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <li className={styles.item}>{text}</li>
    </>
  );
};

export default Text;
