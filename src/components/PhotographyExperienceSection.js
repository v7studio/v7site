import React from 'react';
import '../styles/PhotographyExperienceSection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import mainImage from '../assets/experience-main-image.jpg';

const PhotographyExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-images">
        <div className="image-container">
          <LazyLoadImage src={mainImage} alt="Main Experience" effect="blur" className="main-image" />
          <div className="card card-1"></div>
          <div className="card card-2"></div>
          <div className="card card-3"></div>
          <div className="card card-4"></div>
          <div className="card card-5"></div>
          <div className="card card-6"></div>
        </div>
      </div>
      <div className="experience-content">
        <h3>Immortalize Your Memories</h3>
        <h2>Experience Photography Like Never Before</h2>
        <p>
          With our state-of-the-art equipment and artistic vision, we transform ordinary moments into 
          extraordinary memories. Our talented photographers...
        </p>
        <button className="cta-button">Explore Our Portfolio ➔</button>
      </div>
    </section>
  );
}

export default PhotographyExperienceSection;
