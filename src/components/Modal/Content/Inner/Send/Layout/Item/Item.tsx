import { FC } from "react";
import styles from './Item.module.css'

const Item: FC<{ item: string }> = ({ item }): JSX.Element => {
  return (
    <>
      <li className={styles.item}>{item}</li>
    </>
  );
};

export default Item;
