import React, { useState, useEffect } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './components/Header';
import AboutSection from './components/AboutSection'; 
import ContactUs from './components/ContactUs'; 
import Gallery from './components/GalleryPage';
import PortfolioPage from './components/PortfolioPage';
import PortfolioDetailsPage from './components/PortfolioDetailsPage'; // Import the new PortfolioDetailsPage component
import Homepage from './components/Homepage'; // Desktop version of Homepage
import MobileHomepage from './components/MobileHomepage'; // Mobile version of Homepage
import ServicesPage from './components/ServicesPage';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  const checkScreenSize = () => {
    setIsDesktop(window.innerWidth >= 1024); // 1024px is the breakpoint for desktop devices
  };

  useEffect(() => {
    checkScreenSize(); // Check screen size on initial load
    window.addEventListener('resize', checkScreenSize); // Add resize listener

    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup on unmount
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
    </Router>
  );
}

export default App;
