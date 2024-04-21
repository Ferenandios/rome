import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import styles from "./Address.module.css";

const Address: FC = (): JSX.Element => {
  const { companyAddress } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.ansoc}>
        <address className={styles.address}>{companyAddress}</address>
      </div>
    </>
  );
};

export default Address;
