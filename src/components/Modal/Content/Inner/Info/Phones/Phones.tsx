import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import Phone from "./Phone/Phone";
import styles from "./Phones.module.css";

const Phones: FC = (): JSX.Element => {
  const { phones } = useAppSelector((state) => state.global.contacts);
  return (
    <>
      <div className={styles.phones}>
        {phones.map((phone, index) => (
          <Phone key={index} phone={phone} />
        ))}
      </div>
    </>
  );
};

export default Phones;
