import { FC } from "react";
import styles from "./Title.module.css";
import { useAppSelector } from "../../../../../../hooks";

const Title: FC = (): JSX.Element => {
  const { contactsTitle } = useAppSelector((state) => state.footer);
  return (
    <>
      <h1 className={styles.title}>{contactsTitle}</h1>
    </>
  );
};

export default Title;
