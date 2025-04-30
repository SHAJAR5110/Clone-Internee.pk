import './App.css';
import Header from './UIcomponents/header';
import Footer from './UIcomponents/Footer';
import HeroSection from './UIcomponents/HeroSection';
import Internship from './UIcomponents/Internship';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Graduate from './UIcomponents/Graduate';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/Internship" element={<Internship />} />
          <Route path="/Graduate" element={<Graduate />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
