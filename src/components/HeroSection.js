import React from 'react';
import '../styles/HeroSection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'; // Import Link

import mainImage from '../assets/23.jpg';
import secondaryImage1 from '../assets/20.jpg';
import secondaryImage2 from '../assets/20.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* <h1>See the world,<br />capture <br />the moments</h1> */}
        <h1>See the world,</h1>
        <h1>capture </h1>
        <h1>the moments</h1>
        <p>
          At V Studios, we specialize in capturing life's most cherished moments 
          and turning them into timeless works of art. Our team of passionate 
          photographers is dedicated to telling stories through the lens, ensuring 
          that every shot encapsulates the essence of your unique journey.
        </p>
        <Link to="/about">
          <button className="cta-button">Read More ➔</button>
        </Link>
      </div>
      <div className="hero-images">
        <LazyLoadImage src={mainImage} alt="Main Photography" effect="blur" className="main-image" />
        <div className="empty-card empty-card-top"></div>
        <div className="empty-card empty-card-bottom"></div>
        <div className="secondary-images">
          <LazyLoadImage src={secondaryImage1} alt="Secondary Photography 1" effect="blur" className="secondary-image" />
          <LazyLoadImage src={secondaryImage2} alt="Secondary Photography 2" effect="blur" className="secondary-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
