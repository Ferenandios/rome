import { FC } from "react";
import Title from "./Title/Title";
import styles from "./Contacts.module.css";
import Items from "./Items/Items";

const Contacts: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Title />
        <Items />
      </div>
    </>
  );
};

export default Contacts;
