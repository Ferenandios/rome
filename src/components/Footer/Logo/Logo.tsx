import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo: FC = (): JSX.Element => {
  const { companyLogo } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.ansoc}>
        <Link to={"/rome"}>
          <img className={styles.img} src={companyLogo} alt="Logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
