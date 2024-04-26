import { FC } from "react";
import Burger from "./Burger/Burger";
import Contact from "./Contact/Contact";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import styles from "./Header.module.css";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className={styles.containerr}>
          <div className={styles.inner}>
            <div className={styles.stupidCodeByNikolayKnyazev}>
              <Logo />
              <Burger />
              <Search />
            </div>
            <Contact />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
