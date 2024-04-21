import { FC } from "react";
import styles from "./Paragrapth.module.css";

const Paragraph: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <div>
        <p className={styles.p}>{text}</p>
      </div>
    </>
  );
};

export default Paragraph;
