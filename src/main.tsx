import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import CatalogPage from "./components/CatalogPage/CatalogPage.tsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.tsx";
import ContactsPage from "./components/ContactsPage/ContactsPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/catalog", element: <MainPage /> },
  { path: "/catalog/:itemId/", element: <CatalogPage /> },
  { path: "/contacts", element: <ContactsPage /> },
  { path: "/404", element: <PageNotFound /> },
  { path: "*", element: <Navigate to="/404" /> },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
