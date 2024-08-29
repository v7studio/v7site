import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>V7Studio Photography</title>
        <meta name="description" content="V7Studio Photography - Capturing Life's Moments in Timeless Art" />
        <link rel="canonical" href="http://yourwebsite.com/" />
      </Helmet>

      <header className="header">
        <div className="logo">
          <img src={Logo} alt="VStudio Logo" />
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className="active" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <Link to="/contact" className="hire-us-button">Hire Us</Link>
        </div>
      </header>
    </HelmetProvider>
  );
}

export default Header;
