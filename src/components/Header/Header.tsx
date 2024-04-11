import { FC } from "react";
import Burger from "./Burger/Burger";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container px-[8px] mx-auto">
          <div className="flex justify-between h-[50px] lg:h-[100px]">
            <div className="flex w-full gap-[8px]">
              <Logo />
              <Burger />
              <Search />
            </div>
            <Button />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
