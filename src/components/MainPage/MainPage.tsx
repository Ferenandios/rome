import { FC } from "react";
import Header from "../Header/Header";
import Content from "./Content/Content";

const MainPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default MainPage;
