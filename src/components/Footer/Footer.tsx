import { FC } from "react";
import Info from "./Info/Info";
import Logo from "./Logo/Logo";
import Locate from "./Locate/Locate";
import styles from "./Footer.module.css";

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <footer className={styles.section}>
        <div className={styles.containerr}>
          <div className={styles.inner}>
            <Info />
            <Logo />
            <Locate />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
