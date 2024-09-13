import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import Firestore
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../styles/PortfolioPage.css';

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const portfoliosCollection = await getDocs(collection(db, 'portfolios'));
        const portfoliosData = portfoliosCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPortfolios(portfoliosData);
      } catch (error) {
        console.error("Error fetching portfolios: ", error);
      }
    };

    fetchPortfolios();
  }, []);

  const openPortfolioDetails = (portfolioId) => {
    navigate(`/portfolio/${portfolioId}`);
  };

  return (
    <section className="portfolio-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Portfolio</h1>
      </div>

      {/* Image Grid Section */}
      <div className="image-grid">
        {portfolios.map((portfolio, index) => (
          <div 
            key={index} 
            className="image-item"
          >
            <img 
              src={portfolio.mainImageUrl} 
              alt={portfolio.clientName} 
              loading="lazy"
              srcSet={`${portfolio.mainImageUrl}?w=300 300w, ${portfolio.mainImageUrl}?w=600 600w`}
              sizes="(max-width: 600px) 300px, 600px"
              onClick={() => openPortfolioDetails(portfolio.id)} // Clickable image for desktop view
            />
            <div className="overlay">
              <span>{portfolio.clientName}</span>
              <button 
                className="view-gallery-btn" 
                onClick={() => openPortfolioDetails(portfolio.id)}
              >
                View Gallery
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Special Wedding Package Section */}
      <div className="wedding-package">
        <h2>Our Plan</h2>
        <h3>Special Wedding Package</h3>
        <div className="package-options">
          <div className="package-card">
            <h4>Gold Package !</h4>
            <p>A magazine is a periodical publication</p>
            <p>INR 75000</p>
            <button className="package-btn">Get Started</button>
          </div>
          <div className="package-card popular">
            <h4>Silver Package</h4>
            <p>A magazine is a periodical publication</p>
            <p>INR 60000</p>
            <button className="package-btn">Get Started</button>
          </div>
          <div className="package-card">
            <h4>Bronze Package</h4>
            <p>A magazine is a periodical publication</p>
            <p>INR 40000</p>
            <button className="package-btn">Get Started</button>
          </div>
          <div className="package-card">
            <h4>Other Package</h4>
            <p>Baby shoot, Model shoot, Other shoot</p>
            <p>INR 10000</p>
            <button className="package-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
