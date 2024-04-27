import { FC } from "react";
import Crumbs from "./Crumbs/Crumbs";
import Title from "./Title/Title";
import styles from './Categories.module.css'

const Categories: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Title />
        <Crumbs />
      </div>
    </>
  );
};

export default Categories;
