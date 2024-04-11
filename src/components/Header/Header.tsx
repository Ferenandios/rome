import { FC } from "react";
import Burger from "./Burger/Burger";
import Contact from "./Contact/Contact";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

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
