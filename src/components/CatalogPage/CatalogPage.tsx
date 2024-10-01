import { FC, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentService } from "../../features/global.slice";
import Content from "./Content/Content";
import Crumbs from "../Crumbs/Crumbs";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";
import styles from "./CatalogPage.module.css";
import { Helmet } from "react-helmet";

const CatalogPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const { services, burgerIsOpen, isShowModal, currentService, companyName } =
    useAppSelector((state) => state.global);
  const service =
    itemId !== undefined && !isNaN(+itemId) ? services[+itemId] : null;
  const year: number = new Date().getFullYear();
  useEffect(() => {
    service && dispatch(setCurrentService(service));
  }, [dispatch, service, currentService]);
  return (
    <>
      <Helmet
        title={`${currentService.title} - ${companyName}`}
        meta={[
          {
            name: "title",
            content: `${currentService.title} в Нижневартовске - ${companyName}`,
          },
          {
            name: "description",
            content: `${currentService.title} в Нижневартовске более 5 лет. Только качественные материалалы. Цены от 5 000 рублей. Работаем в ${year} году!`,
          },
          {
            name: "keywords",
            content: currentService.keywords,
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

export default CatalogPage;
