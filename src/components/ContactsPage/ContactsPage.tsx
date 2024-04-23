import React, { FC } from "react";
import Header from "../Header/Header";
import Content from "./Content/Content";
import Footer from "../Footer/Footer";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";

const ContactsPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Content />
      <Footer />

      <Message />
      <Modal />
    </>
  );
};

export default ContactsPage;
