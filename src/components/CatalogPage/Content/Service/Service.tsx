import { FC } from "react";
import Bottom from "./Bottom/Bottom";
import Line from "./Line/Line";
import styles from "./Service.module.css";
import Top from "./Top/Top";

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
