import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import styles from "./Address.module.css";

const Address: FC = (): JSX.Element => {
  const { companyAddress } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.ansoc}>
        <h1 className={styles.text}>{companyAddress}</h1>
      </div>
    </>
  );
};

export default Address;
