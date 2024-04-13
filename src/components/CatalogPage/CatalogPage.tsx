import { FC, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentService } from "../../features/global.slice";

const CatalogPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const { services } = useAppSelector((state) => state.global);
  const service =
    itemId !== undefined && !isNaN(+itemId) ? services[+itemId] : null;
  useEffect(() => {
    service && dispatch(setCurrentService(service));
  });
  return (
    <>
      <Header />
      {service ? service.title : "rolfanPomoika"}
      <Footer />
    </>
  );
};

export default CatalogPage;
