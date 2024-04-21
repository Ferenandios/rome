import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import styles from "./Copyright.module.css";

const Copyright: FC = (): JSX.Element => {
  const { companyName } = useAppSelector((state) => state.global);
  const year = new Date().getFullYear();
  return (
    <>
      <div className={styles.ansoc}>
        <span className={styles.text}>
          &copy; {year} {companyName}
        </span>
      </div>
    </>
  );
};

export default Copyright;
