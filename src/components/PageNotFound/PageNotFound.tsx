import { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "./Content/Content";
import Crumbs from "../Crumbs/Crumbs";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";
import { Helmet } from "react-helmet";
import { useAppSelector } from "../../hooks";

const PageNotFound: FC = (): JSX.Element => {
  const { companyName } = useAppSelector((state) => state.global);
  return (
    <>
      <Helmet title={`Страница не найдена - ${companyName}`} />
      <Header />
      <Crumbs />
      <Content />
      <Footer />

      <Message />
      <Modal />
    </>
  );
};

export default PageNotFound;
