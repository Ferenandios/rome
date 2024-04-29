import { FC } from "react";
import Phone from "./Phone/Phone";
import styles from "./Phones.module.css";
import { useAppSelector } from "../../../../../../../hooks";

const Phones: FC = (): JSX.Element => {
  const { phones } = useAppSelector((state) => state.global.contacts);
  return (
    <>
      <div className={styles.inner}>
        {phones.map((phone, index) => (
          <Phone key={index} phone={phone} />
        ))}
      </div>
    </>
  );
};

export default Phones;
