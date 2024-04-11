import { FC } from "react";
import Header from "../Header/Header";
import Content from "./Content/Content";
import Footer from "../Footer/Footer";
import { useAppSelector } from "../../hooks";
import Message from "../Message/Message";
import Crumbs from "../Crumbs/Crumbs";

const MainPage: FC = (): JSX.Element => {
  const { burgerIsOpen } = useAppSelector((state) => state.global);
  return (
    <>
      <main
        className={`${burgerIsOpen ? "w-screen h-screen overflow-hidden" : ""}`}
      >
        <Header />
        <Crumbs />
        <Content />
        <Footer />

        <Message />
      </main>
    </>
  );
};

export default MainPage;
