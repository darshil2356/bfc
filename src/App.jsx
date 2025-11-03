import './App.css'
import AboutUs from './pages/AboutUs/AboutUs';
import HomePage from './pages/HomePage'
import KAYL from './pages/AboutUs/KAYL'
import { Routes, Route } from "react-router-dom";
import Objectives from './pages/AboutUs/Objectives';

function App() {

  return (
   <>
    <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/know-about-your-policy" element={<KAYL />} />
        <Route path='/about/objectives' element={<Objectives />} />
      </Routes >
    </div>
   </>
  )
}

export default App
