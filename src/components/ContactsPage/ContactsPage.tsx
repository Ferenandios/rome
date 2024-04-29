import { FC } from "react";
import Crumbs from "../Crumbs/Crumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";
import Content from "./Content/Content";
import { useAppSelector } from "../../hooks";

const ContactsPage: FC = (): JSX.Element => {
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

export default ContactsPage;
