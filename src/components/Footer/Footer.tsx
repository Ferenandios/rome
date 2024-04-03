import { FC } from "react";
import Info from "./Info/Info";
import Logo from "./Logo/Logo";

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <footer className="pt-[24px] pb-[12px]">
        <div className="container px-[8px]">
          <div>
            <Info />
            <Logo />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
