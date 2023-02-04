import { useState } from "react";

import CartListProvider from "./contexts/cartListContext/CartList";
import Header from "./components/header/header";
import AppRoutes from "./components/appRoutes/AppRoutes";
import Footer from "./components/footer/footer";
import Payment from "./components/payment/payment";

import "./App.scss";

function App() {
  const [paymentVisible, setPaymentVisible] = useState(false);

  return (
    <div className="wrapper">
      <CartListProvider>
        <Header />
        <AppRoutes setPaymentVisible={setPaymentVisible} />
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
