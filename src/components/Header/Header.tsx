import { FC } from "react";
import Burger from "./Burger/Burger";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container">
          <div className="flex h-[50px] bg-lime-200">
            <Burger />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
