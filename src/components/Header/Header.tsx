import { FC } from "react";
import Burger from "./Burger/Burger";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Button from "./Contact/Button/Button";
import Contact from "./Contact/Contact";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container px-[8px] mx-auto">
          <div className="flex justify-between h-[50px] lg:h-[100px]">
            <div className="flex w-full gap-[8px] lg:gap-[20px]">
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
