import { FC, useEffect } from "react";
import Header from "../Header/Header";
import Content from "./Content/Content";
import Footer from "../Footer/Footer";
import { useAppSelector } from "../../hooks";
import Message from "../Message/Message";
import Crumbs from "../Crumbs/Crumbs";
import Modal from "../Modal/Modal";
import styles from "./MainPage.module.css";
import DocumentMeta from "react-document-meta";

const MainPage: FC = (): JSX.Element => {
  const { burgerIsOpen, isShowModal } = useAppSelector((state) => state.global);
  useEffect(() => {
    // Changing Page title by service.title
    document.title = "Услуги";
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

export default MainPage;
