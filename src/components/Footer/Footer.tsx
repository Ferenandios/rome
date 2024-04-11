import { FC } from "react";
import Info from "./Info/Info";
import Logo from "./Logo/Logo";
import Locate from "./Locate/Locate";

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <footer className="pt-[24px] pb-[12px] md:pt-[28px]">
        <div className="container px-[8px] mx-auto">
          <div className="md:flex">
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
