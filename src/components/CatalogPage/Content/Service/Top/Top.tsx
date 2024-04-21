import { FC } from "react";
import Title from "./Title/Title";
import Image from "./Image/Image";
import styles from "./Top.module.css";

const Top: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Image />
        <Title />
      </div>
    </>
  );
};

export default Top;
