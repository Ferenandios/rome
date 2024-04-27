import { FC } from "react";
import { type IElement } from "../../../../../types/Header/types";
import styles from "./Link.module.css";

const Link: FC<{ contact: IElement }> = ({ contact }): JSX.Element => {
  return (
    <>
      <a className={styles.link} href={contact.link}>
        {contact.text}
      </a>
    </>
  );
};

export default Link;
