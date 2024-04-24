import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import styles from "./Address.module.css";

const Address: FC = (): JSX.Element => {
  const { companyAddress } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.ansoc}>
        <span className={styles.text}>{companyAddress}</span>
      </div>
    </>
  );
};

export default Address;
