import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo: FC = (): JSX.Element => {
  const { crumbs, companyLogo } = useAppSelector((state) => state.global);
  const mainPage: string =
    crumbs[crumbs.findIndex((crumb) => crumb.link === "/")].link;
  return (
    <>
      <div className={styles.ansoc}>
        <Link to={mainPage}>
          <img className={styles.img} src={companyLogo} alt="Logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
