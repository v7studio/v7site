import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection'; 
import ContactUs from './components/ContactUs'; // Import Contact Us component
import Experience from './components/PhotographyExperienceSection';
import ExpertiseSection from './components/ExpertiseSection';
import CreativitySection from './components/CreativitySection';
import VisionExpertiseSection from './components/VisionExpertiseSection';
import GallerySection from './components/GallerySection';
import Gallery from './components/GalleryPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Experience />
            <ExpertiseSection />
            <CreativitySection />
            <VisionExpertiseSection />
            <GallerySection />
          </>
        } />
        <Route path="/about" element={<AboutSection />} /> 
        <Route path="/contact" element={<ContactUs />} /> {/* Add ContactUs route */}
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>
    </Router>
  );
}

export default App;
