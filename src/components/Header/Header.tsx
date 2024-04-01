import { FC } from "react";
import Logo from "./Logo/Logo";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container mx-auto px-[16px]">
          <div className="flex h-[100px] bg-lime-200">
            <Logo />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
