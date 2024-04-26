import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import styles from "./Title.module.css";

const Title: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  const { title } = useAppSelector((state) => state.modal);
  return (
    <>
      <div style={{ borderColor: colorTheme }} className={styles.ansoc}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </>
  );
};

export default Title;
