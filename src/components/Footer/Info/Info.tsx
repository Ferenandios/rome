import { FC } from "react";
import Categories from "./Categories/Categories";
import styles from "./Info.module.css";

const Info: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Categories />
        {/* Create Contacts component like
        upper Categories-component
        BLESSRNG do not be a down
        please */}
      </div>
    </>
  );
};

export default Info;
