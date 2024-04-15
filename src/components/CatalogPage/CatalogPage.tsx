import { FC, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentService } from "../../features/global.slice";
import Content from "./Content/Content";
import Crumbs from "../Crumbs/Crumbs";

const CatalogPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const { services } = useAppSelector((state) => state.global);
  const service =
    itemId !== undefined && !isNaN(+itemId) ? services[+itemId] : null;
  useEffect(() => {
    service && dispatch(setCurrentService(service));
  }, []);
  return (
    <>
      <Header />
      <Crumbs />
      <Content />
      <Footer />
    </>
  );
};

export default CatalogPage;
