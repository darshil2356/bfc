import './App.css'
import AboutUs from './pages/AboutUs/AboutUs';
import HomePage from './pages/HomePage'
import KAYL from './pages/AboutUs/KAYL'
import { Routes, Route } from "react-router-dom";
import Objectives from './pages/AboutUs/Objectives';
import ContactForm from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
   <>
    <div>
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/know-about-your-policy" element={<KAYL />} />
        <Route path='/about/objectives' element={<Objectives />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes >
      <Footer />
    </div>
   </>
  )
}

export default App
