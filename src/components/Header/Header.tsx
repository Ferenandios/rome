import { FC } from "react";
import Burger from "./Burger/Burger";
import Search from "./Search/Search";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container px-[8px]">
          <div className="flex h-[50px]">
            <Burger />
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
