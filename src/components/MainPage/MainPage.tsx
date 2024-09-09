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
  const { burgerIsOpen, isShowModal, companyName } = useAppSelector(
    (state) => state.global
  );
  const meta = {
    title: `${companyName} - Ваш надежный партнер в Нижневартовске | Услуги компании`,
    description: `${companyName} - широкий спектр услуг в Нижневартовске. Надежность, профессионализм, качество. Цены от 5 000 руб. Встречайте 2024 год с нами!`,
  };
  useEffect(() => {
    // Changing Page title by service.title
    document.title = "Услуги";
  });
  return (
    <>
      <DocumentMeta {...meta} />
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
