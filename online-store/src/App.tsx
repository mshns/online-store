import "./App.scss";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import { NonFound } from "./pages/nonPage/nonPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart/cartPage";
import ProductPage from "./pages/product/productPage";
import CartListProvider from "./contexts/cartListContext/CartList";

function App() {
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
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NonFound />} />
        </Routes>
        <Footer />
      </CartListProvider>
    </div>
  );
}

export default App;
