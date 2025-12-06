import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import ComponentContainer from "./containers/ComponentContainer.jsx";
import ProductPage from "./pages/productPage/ProductPage.jsx";
import Cart from "./pages/cart/Cart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/products",
    element: <ComponentContainer children={<ProductPage id={"A001"} />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/products/:id",
    element: <ComponentContainer children={<ProductPage />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/cart",
    element: <ComponentContainer children={<Cart />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/contactUs",
    element: <ComponentContainer children={<ContactUs />} />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
