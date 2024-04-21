import { FC } from "react";
import Bottom from "./Bottom/Bottom";
import Line from "./Line/Line";
import Top from "./Top/Top";
import styles from "./Service.module.css";

const Service: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Top />
        <Line />
        <Bottom />
      </div>
    </>
  );
};

export default Service;
