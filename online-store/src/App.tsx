import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import { NonFound } from "./pages/nonPage/nonPage";

import CartPage from "./pages/cart/cartPage";
import ProductPage from "./pages/product/productPage";
import CartListProvider from "./contexts/cartListContext/CartList";
import Payment from "./components/payment/payment";

function App() {
  const [paymentVisible, setPaymentVisible] = useState(false);

  return (
    <div className="wrapper">
      <CartListProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:category/:brand/:id"
            element={<ProductPage />}
          />
          <Route
            path="/cart"
            element={<CartPage setPaymentVisible={setPaymentVisible} />}
          />
          <Route path="*" element={<NonFound />} />
        </Routes>
        <Footer />
      </CartListProvider>
      <Payment
        paymentVisible={paymentVisible}
        setPaymentVisible={setPaymentVisible}
      />
    </div>
  );
}

export default App;
