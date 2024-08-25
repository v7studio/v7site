import React from 'react';
import '../styles/VisionExpertiseSection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import img1 from '../assets/11.jpg';
import img2 from '../assets/13.jpg';
import img3 from '../assets/17.jpg';

const VisionExpertiseSection = () => {
  return (
    <section className="vision-expertise-section">
      <div className="vision-content">
        <h2>Your Vision, Our <br/>Expertise</h2>
        <p>
          At V Studio, we understand that every client has unique needs and desires.
          That's why we collaborate closely with you, ensuring that your vision is brought to life.
        </p>
        <button className="consultation-button">Request a Consultation</button>
      </div>
      <div className="vision-images">
        <div className="image-container image-container-1">
          <LazyLoadImage src={img1} alt="Client Image 1" effect="blur" className="gallery-image gallery-image-1" />
        </div>
        <div className="image-container image-container-2">
          <LazyLoadImage src={img2} alt="Client Image 2" effect="blur" className="gallery-image gallery-image-2" />
        </div>
        <div className="image-container image-container-3">
          <LazyLoadImage src={img3} alt="Client Image 3" effect="blur" className="gallery-image gallery-image-3" />
        </div>
      </div>
      {/* <div className="next-button">
        <button>Next</button>
      </div> */}
    </section>
  );
};

export default VisionExpertiseSection;
