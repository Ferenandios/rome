import { FC } from "react";
import Helmet from "react-helmet";
import { useAppSelector } from "../../hooks";
import Crumbs from "../Crumbs/Crumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";
import Content from "./Content/Content";
import styles from "./MainPage.module.css";

const MainPage: FC = (): JSX.Element => {
  const { burgerIsOpen, isShowModal, companyName } = useAppSelector(
    (state) => state.global
  );
  return (
    <>
      <Helmet
        title={`Услуги - ${companyName}`}
        meta={[
          {
            name: "title",
            content: `Услуги компании | ${companyName} - Ваш надежный партнер в Нижневартовске`,
          },
          {
            name: "description",
            content: `${companyName} - широкий спектр услуг в Нижневартовске. Надежность, профессионализм, качество. Цены от 5 000 руб. Встречайте 2024 год с нами!`,
          },
          {
            name: "keywords",
            content:
              "ремикс в нижневартовске, ооо ремикс нижневартовск, услуги ремикс, ремикс нв, контакты ремикс, каталог, индустриальная 14 стр 13, remiksnv@yandex.ru, remiksnv, remiks86",
          },
        ]}
      />
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
