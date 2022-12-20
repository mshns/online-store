import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './pages/home/Home';
import { NonFound } from './pages/nonPage/nonPage';
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container wrapper">
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path="*" element = {<NonFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
