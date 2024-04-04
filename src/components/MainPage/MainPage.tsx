import { FC } from "react";
import Header from "../Header/Header";
import Content from "./Content/Content";
import Footer from "../Footer/Footer";
import { useAppSelector } from "../../hooks";

const MainPage: FC = (): JSX.Element => {
  const { burgerIsOpen } = useAppSelector((state) => state);
  return (
    <>
      <main
        className={`${burgerIsOpen ? "w-screen h-screen overflow-hidden" : ""}`}
      >
        <Header />
        <Content />
        <Footer />
      </main>
    </>
  );
};

export default MainPage;
