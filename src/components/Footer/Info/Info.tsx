import { FC } from "react";
import Categories from "./Categories/Categories";
import styles from "./Info.module.css";
import Contacts from "./Contacts/Contacts";

const Info: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Categories />
        <Contacts />
      </div>
    </>
  );
};

export default Info;
