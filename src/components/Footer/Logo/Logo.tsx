import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Logo.module.css";

const Logo: FC = (): JSX.Element => {
  const { companyLogo } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.ansoc}>
        <img className={styles.img} src={companyLogo} alt="Logo" />
      </div>
    </>
  );
};

export default Logo;
