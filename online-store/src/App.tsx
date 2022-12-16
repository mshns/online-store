import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

function App() {
  return (
    <div className="container wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
