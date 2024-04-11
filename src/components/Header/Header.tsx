import { FC } from "react";
import Burger from "./Burger/Burger";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container px-[8px] mx-auto">
          <div className="flex h-[50px]">
            <Logo />
            <Burger />
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
