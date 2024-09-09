import React, { useState, useEffect } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './components/Header';
import AboutSection from './components/AboutSection'; 
import ContactUs from './components/ContactUs'; 
import Gallery from './components/GalleryPage';
import PortfolioPage from './components/PortfolioPage';
import PortfolioDetailsPage from './components/PortfolioDetailsPage'; 
import Homepage from './components/Homepage'; 
import MobileHomepage from './components/MobileHomepage'; 
import ServicesPage from './components/ServicesPage';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  const checkScreenSize = () => {
    setIsDesktop(window.innerWidth >= 1024); 
  };

  useEffect(() => {
    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize); 

    return () => window.removeEventListener('resize', checkScreenSize); 
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={isDesktop ? <Homepage /> : <MobileHomepage />} />
        <Route path="/about" element={<AboutSection />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/portfolio" element={<PortfolioPage />} /> 
        <Route path="/portfolio/:portfolioId" element={<PortfolioDetailsPage />} /> 
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      {/* WhatsApp Icon */}
      <a href="https://wa.me/8438016782" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </Router>
  );
}

export default App;
