import { FC } from "react";
import Info from "./Info/Info";
import Logo from "./Logo/Logo";
import Copyright from "./Copyright/Copyright";

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <footer className="pt-[24px] pb-[12px]">
        <div className="container px-[8px]">
          <div>
            <Info />
            <Logo />
            <Copyright />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
