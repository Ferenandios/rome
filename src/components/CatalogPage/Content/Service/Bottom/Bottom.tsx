import { FC } from "react";
import styles from "./Bottom.module.css";
import Description from "./Description/Description";
import Gallery from "./Gallery/Gallery";

const Bottom: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Description />
        <Gallery />
      </div>
    </>
  );
};

export default Bottom;
