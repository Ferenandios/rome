import { FC } from "react";
import Phones from "./Phones/Phones";
import Emails from "./Emails/Emails";
import styles from "./Contacts.module.css";

const Contacts: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Phones />
        <Emails />
      </div>
    </>
  );
};

export default Contacts;
