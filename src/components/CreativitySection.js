import React from 'react';
import '../styles/CreativitySection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import img1 from '../assets/6.jpg';
import img2 from '../assets/9.jpg';
import img3 from '../assets/8.jpg';
import img4 from '../assets/9.jpg';
import img5 from '../assets/10.jpg';

const CreativitySection = () => {
  return (
    <section className="creativity-section">
      <div className="creativity-images">
        <LazyLoadImage src={img1} alt="Gallery Image 1" effect="blur" className="gallery-img gallery-img1" />
        <LazyLoadImage src={img2} alt="Gallery Image 2" effect="blur" className="gallery-img gallery-img2" />
        <LazyLoadImage src={img3} alt="Gallery Image 3" effect="blur" className="gallery-img gallery-img3" />
        <LazyLoadImage src={img4} alt="Gallery Image 4" effect="blur" className="gallery-img gallery-img4" />
        <LazyLoadImage src={img5} alt="Gallery Image 5" effect="blur" className="gallery-img gallery-img5" />
        <div className="empty-cardz empty-card-x"></div>
      </div>
      <div className="creativity-content">
        <div className="empty-cards empty-card-t"></div>
        <h2>Unmatched <br/>Creativity</h2>
        <p>
          With over a year of experience, we have captured countless moments and crafted stunning visuals. 
          Our team's dedication and passion have led to numerous awards and recognition. 
          Join the growing number of satisfied clients who have experienced the magic VStudio.
        </p>
        <div className="stats">
          <div className="stat-item">
            <h3>550+</h3>
            <h5>Happy Clients</h5>
          </div>
          <div className="stat-item">
            <h3>38+</h3>
            <h5>Awards Won</h5>
          </div>
          <div className="stat-item">
            <h3>9000+</h3>
            <h5>Captured Events</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
