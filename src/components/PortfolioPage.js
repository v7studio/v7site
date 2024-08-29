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
            onClick={() => openPortfolioDetails(portfolio.id)}
          >
            <img 
              src={portfolio.mainImageUrl} 
              alt={portfolio.clientName} 
              loading="lazy"
              srcSet={`${portfolio.mainImageUrl}?w=300 300w, ${portfolio.mainImageUrl}?w=600 600w`}
              sizes="(max-width: 600px) 300px, 600px"
            />
            <div className="overlay">{portfolio.clientName}</div>
          </div>
        ))}
      </div>

      {/* Special Wedding Package Section */}
      <div className="wedding-package">
        <h2>Our Plan</h2>
        <h3>Special Wedding Package</h3>
        <div className="package-options">
          <div className="package-card">
            <h4>Basic</h4>
            <p>$25 / month</p>
            <p>30% Off for Beginners</p>
            <button className="package-btn">Get Started</button>
          </div>
          <div className="package-card popular">
            <h4>Standard</h4>
            <p>$35 / month</p>
            <p>Most popular</p>
            <button className="package-btn">Get Started</button>
          </div>
          <div className="package-card">
            <h4>Premium</h4>
            <p>$50 / month</p>
            <p>10% Off for Yoga Class</p>
            <button className="package-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;