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

const CatalogPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const { services, burgerIsOpen, isShowModal, currentService } =
    useAppSelector((state) => state.global);
  const service =
    itemId !== undefined && !isNaN(+itemId) ? services[+itemId] : null;
  useEffect(() => {
    service && dispatch(setCurrentService(service));
    // Changing Page title by service.title
    document.title = currentService.title;
  }, [dispatch, service, currentService]);
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

export default CatalogPage;
