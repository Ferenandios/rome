import { FC } from "react";
import Address from "./Address/Address";
import Contacts from "./Contacts/Contacts";
import styles from "./Info.module.css";

const Info: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Address />
        <Contacts />
      </div>
    </>
  );
};

export default Info;
