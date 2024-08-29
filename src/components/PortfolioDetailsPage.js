import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/PortfolioDetailsPage.css';
import { useParams } from 'react-router-dom';

const PortfolioDetailsPage = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const portfolioDoc = await getDoc(doc(db, 'portfolios', portfolioId));
        if (portfolioDoc.exists()) {
          setPortfolio(portfolioDoc.data());
        } else {
          console.error("No such portfolio!");
        }
      } catch (error) {
        console.error("Error fetching portfolio: ", error);
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <section className="portfolio-details-page">
      <div className="hero-section">
        <h1>{portfolio.clientName}'s Gallery</h1>
      </div>

      <div className="image-grid">
        {portfolio.galleryImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`${portfolio.clientName} ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioDetailsPage;