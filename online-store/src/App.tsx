import "./App.scss";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/Home";
import { NonFound } from "./pages/nonPage/nonPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart/cartPage";
import ProductPage from "./pages/product/productPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NonFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
