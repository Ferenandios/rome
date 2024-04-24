import { FC } from "react";
import styles from './Phone.module.css'

const Phone: FC<{ phone: string }> = ({ phone }): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <span className={styles.text}>{phone}</span>
      </div>
    </>
  );
};

export default Phone;
