import { FC } from "react";
import Header from "../Header/Header";
import Content from "./Content/Content";
import Footer from "../Footer/Footer";

const MainPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default MainPage;
