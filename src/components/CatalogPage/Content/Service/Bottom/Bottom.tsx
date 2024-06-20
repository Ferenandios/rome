import { FC } from "react";
import styles from "./Bottom.module.css";
import Description from "./Description/Description";

const Bottom: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Description />
      </div>
    </>
  );
};

export default Bottom;
