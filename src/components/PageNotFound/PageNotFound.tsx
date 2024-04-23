import { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "./Content/Content";
import Crumbs from "../Crumbs/Crumbs";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";

const PageNotFound: FC = (): JSX.Element => {
  return (
    <>
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
