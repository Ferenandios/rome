import { FC } from "react";
import Header from "../Header/Header";
import Content from "./Content/Content";
import Footer from "../Footer/Footer";
import { useAppSelector } from "../../hooks";
import Message from "../Message/Message";

const MainPage: FC = (): JSX.Element => {
  const { burgerIsOpen } = useAppSelector((state) => state.global);
  return (
    <>
      <main
        className={`${burgerIsOpen ? "w-screen h-screen overflow-hidden" : ""}`}
      >
        <Header />
        <Content />
        <Footer />

        <Message />
      </main>
    </>
  );
};

export default MainPage;
