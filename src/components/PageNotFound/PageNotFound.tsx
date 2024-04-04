import { FC } from "react";
import Header from "../Header/Header";

const PageNotFound: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <span className="font-sans text-[12px] mt-2 ml-2p">404</span>
    </>
  );
};

export default PageNotFound;
