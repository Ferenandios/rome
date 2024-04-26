import { FC } from "react";
import Title from "./Title/Title";
import Exit from "./Exit/Exit";
import styles from "./Top.module.css";

const Top: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Title />
        <Exit />
      </div>
    </>
  );
};

export default Top;
