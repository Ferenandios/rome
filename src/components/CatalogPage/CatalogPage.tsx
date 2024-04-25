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

const CatalogPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const { services, burgerIsOpen, isShowModal } = useAppSelector(
    (state) => state.global
  );
  const service =
    itemId !== undefined && !isNaN(+itemId) ? services[+itemId] : null;
  useEffect(() => {
    service && dispatch(setCurrentService(service));
  }, [dispatch, service]);
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

export default CatalogPage;
