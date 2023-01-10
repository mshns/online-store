import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import CartListProvider from "./contexts/cartListContext/CartList";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import CartPage from "./pages/cart/cartPage";
import NonFound from "./pages/nonPage/nonPage";
import ProductPage from "./pages/product/productPage";
import Footer from "./components/footer/footer";
import Payment from "./components/payment/payment";

import "./App.scss";

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
            element={<ProductPage setPaymentVisible={setPaymentVisible} />}
          />
          <Route
            path="/cart"
            element={<CartPage setPaymentVisible={setPaymentVisible} />}
          />
          <Route path="*" element={<NonFound />} />
        </Routes>
        <Footer />
        <Payment
          paymentVisible={paymentVisible}
          setPaymentVisible={setPaymentVisible}
        />
      </CartListProvider>
    </div>
  );
}

export default App;
