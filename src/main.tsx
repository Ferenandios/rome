import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import CatalogPage from "./components/CatalogPage/CatalogPage.tsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.tsx";

const router = createBrowserRouter([
  { path: "/rome", element: <MainPage /> },
  { path: "/rome/catalog", element: <MainPage /> },
  { path: "/rome/catalog/:itemId/", element: <CatalogPage /> },
  { path: "*", element: <PageNotFound /> },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
