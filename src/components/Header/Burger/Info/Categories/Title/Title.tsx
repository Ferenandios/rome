import { FC } from "react";
import styles from "./Title.module.css";

const Title: FC = (): JSX.Element => {
  return (
    <>
      <h1 className={styles.title}>Категории</h1>
    </>
  );
};

export default Title;
