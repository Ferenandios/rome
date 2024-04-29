import { FC } from "react";
import styles from "./Email.module.css";

const Email: FC<{ email: string }> = ({ email }): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <span className={styles.email}>{email}</span>
      </div>
    </>
  );
};

export default Email;
