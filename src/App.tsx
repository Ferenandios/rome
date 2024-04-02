import { FC } from "react";
import MainPage from "./components/MainPage/MainPage";
import { useAppSelector } from "./hooks";

const App: FC = (): JSX.Element => {
  const { showedPage } = useAppSelector((state) => state);
  return <>{showedPage === "main" && <MainPage />}</>;
};

export default App;
