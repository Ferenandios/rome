import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo: FC = (): JSX.Element => {
  const { crumbs, companyLogo } = useAppSelector((state) => state.global);
  const mainPage: string =
    crumbs[crumbs.findIndex((crumb) => crumb.link === "/")].link;
  return (
    <>
      <Link className={styles.ansoc} to={mainPage}>
        <img className="h-[30px] lg:h-[50px]" src={companyLogo} alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
