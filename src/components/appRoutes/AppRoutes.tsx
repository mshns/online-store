import { Route, Routes } from "react-router-dom";

import Home from "../../pages/home/Home";
import CartPage from "../../pages/cart/cartPage";
import NonFound from "../../pages/nonPage/nonPage";
import ProductPage from "../../pages/product/productPage";

import { IPaymentVisible, IRoute } from "../../types";

const AppRoutes = ({ setPaymentVisible }: IPaymentVisible) => {
  const routes: IRoute[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:category/:brand/:id",
      element: <ProductPage setPaymentVisible={setPaymentVisible} />,
    },
    {
      path: "/cart",
      element: <CartPage setPaymentVisible={setPaymentVisible} />,
    },
    {
      path: "*",
      element: <NonFound />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, key) => (
        <Route path={route.path} element={route.element} key={key} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
