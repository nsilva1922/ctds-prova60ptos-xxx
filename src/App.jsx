import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';
import Sobre from './assets/components/Sobre/sobre';
import Contato from './assets/components/Contato/Contato';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;