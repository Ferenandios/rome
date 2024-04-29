import { FC } from "react";
import styles from "./Title.module.css";
import { useAppSelector } from "../../../../../../hooks";

const Title: FC = (): JSX.Element => {
  const { categoryTitle } = useAppSelector((state) => state.footer);
  return (
    <>
      <h1 className={styles.title}>{categoryTitle}</h1>
    </>
  );
};

export default Title;
