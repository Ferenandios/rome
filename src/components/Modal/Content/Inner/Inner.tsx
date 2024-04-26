import { FC } from "react";
import Info from "./Info/Info";
import Send from "./Send/Send";
import styles from './Inner.module.css'

const Inner: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Info />
        <Send />
      </div>
    </>
  );
};

export default Inner;
