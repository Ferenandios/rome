import { FC } from "react";
import Header from "../Header/Header";
import Content from "./Content/Content";
import Footer from "../Footer/Footer";
import { useAppSelector } from "../../hooks";
import Message from "../Message/Message";
import Crumbs from "../Crumbs/Crumbs";
import Modal from "../Modal/Modal";

const MainPage: FC = (): JSX.Element => {
  const { burgerIsOpen, isShowModal } = useAppSelector((state) => state.global);
  return (
    <>
      <main
        className={`${
          burgerIsOpen || isShowModal ? "w-screen h-screen overflow-hidden" : ""
        }`}
      >
        <Header />
        <Crumbs />
        <Content />
        <Footer />

        <Message />
        <Modal />
      </main>
    </>
  );
};

export default MainPage;
