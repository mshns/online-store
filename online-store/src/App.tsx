import "./App.scss";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/Home";
import { NonFound } from "./pages/nonPage/nonPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart/cartPage";

function App() {
  return (
    <div className="container wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NonFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
