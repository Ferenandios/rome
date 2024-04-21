import { FC } from "react";
import styles from "./ListItem.module.css";

const ListItem: FC<{ text: string }> = ({ text }): JSX.Element => {
  return (
    <>
      <li className={styles.item}>{text}</li>
    </>
  );
};

export default ListItem;
