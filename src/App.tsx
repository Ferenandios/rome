import { FC } from "react";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import MainPage from "./components/MainPage/MainPage";
import { useAppSelector } from "./hooks";

const App: FC = (): JSX.Element => {
  const { showedPage, burgerIsOpen } = useAppSelector((state) => state);
  return (
    <>
      <main
        className={`${burgerIsOpen ? "w-screen h-screen overflow-hidden" : ""}`}
      >
        {showedPage === "main" && <MainPage />}
        {showedPage === "catalog" && <CatalogPage />}
      </main>
    </>
  );
};

export default App;
