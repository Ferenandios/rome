import { FC } from "react";
import Inner from "./Inner/Inner";
import Services from "./Services/Services";
import styles from "./Search.module.css";

const Search: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Inner />
        <Services />
      </div>
    </>
  );
};

export default Search;
