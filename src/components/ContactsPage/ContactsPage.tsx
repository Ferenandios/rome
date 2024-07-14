import { FC, useEffect } from "react";
import Crumbs from "../Crumbs/Crumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";
import Content from "./Content/Content";
import { useAppSelector } from "../../hooks";
import styles from "./ContactsPage.module.css";

const ContactsPage: FC = (): JSX.Element => {
  const { burgerIsOpen, isShowModal } = useAppSelector((state) => state.global);
  useEffect(() => {
    document.title = "Контакты";
  });
  return (
    <>
      <main className={`${burgerIsOpen || isShowModal ? styles.inner : ""}`}>
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
