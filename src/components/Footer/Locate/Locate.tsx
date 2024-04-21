import { FC } from "react";
import Copyright from "./Copyright/Copyright";
import Address from "./Address/Address";
import styles from "./Locate.module.css";

const Locate: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Copyright />
        <Address />
      </div>
    </>
  );
};

export default Locate;
