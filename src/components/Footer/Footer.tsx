import { FC } from "react";
import Info from "./Info/Info";

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <footer className="pt-[24px] pb-[12px] px-[8px]">
        <div className="container px-[8px]">
          <div>
            <Info />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
