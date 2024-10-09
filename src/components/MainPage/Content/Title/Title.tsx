import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import styles from "./Title.module.css";

const Title: FC = (): JSX.Element => {
  const { title } = useAppSelector((state) => state.mainContent);
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
    </>
  );
};

export default Title;
