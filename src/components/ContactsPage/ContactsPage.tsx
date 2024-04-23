import { FC } from "react";
import Crumbs from "../Crumbs/Crumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";
import Content from "./Content/Content";

const ContactsPage: FC = (): JSX.Element => {
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

export default ContactsPage;
