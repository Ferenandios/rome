import { FC } from "react";
import styles from "./Content.module.css";
import { useAppSelector } from "../../../hooks";

const Content: FC = (): JSX.Element => {
  const { title } = useAppSelector((state) => state.pageNotFound);
  return (
    <>
      <section className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
      </section>
    </>
  );
};

export default Content;
