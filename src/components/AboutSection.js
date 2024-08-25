import React from 'react';
import '../styles/AboutSection.css'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';

import aboutMainImage from '../assets/23.jpg';
import aboutSecondaryImage1 from '../assets/5.jpg';
import aboutSecondaryImage2 from '../assets/6.jpg';
import aboutSecondaryImage3 from '../assets/8.jpg';
import aboutSecondaryImage4 from '../assets/5.jpg';
import aboutSecondaryImage5 from '../assets/8.jpg';

const AboutSection = () => {
  return (
    <section className="about-v7studio-section">
      {/* Hero Section */}
      <div className="about-v7studio-hero-section">
        <h1>My Story</h1>
      </div>

      {/* My Story Section */}
      <div className="about-v7studio-my-story">
        <div className="about-v7studio-text-content">
          <h2>About Me</h2>
          <p>
            At V Studios, we specialize in capturing life's most cherished moments 
            and turning them into timeless works of art. Our team of passionate 
            photographers is dedicated to telling stories through the lens, ensuring 
            that every shot encapsulates the essence of your unique journey.
          </p>
          <button className="about-v7studio-btn">View Portfolio</button>
        </div>
        <LazyLoadImage src={aboutMainImage} alt="Main Photography" effect="blur" className="about-v7studio-main-image" />
      </div>

      {/* Image Grid Section */}
      <div className="about-v7studio-image-grid">
        <LazyLoadImage src={aboutSecondaryImage1} alt="Photography 1" effect="blur" className="about-v7studio-grid-image" />
        <LazyLoadImage src={aboutSecondaryImage2} alt="Photography 2" effect="blur" className="about-v7studio-grid-image" />
        <LazyLoadImage src={aboutSecondaryImage3} alt="Photography 3" effect="blur" className="about-v7studio-grid-image" />
        <LazyLoadImage src={aboutSecondaryImage4} alt="Photography 4" effect="blur" className="about-v7studio-grid-image" />
        <LazyLoadImage src={aboutSecondaryImage5} alt="Photography 5" effect="blur" className="about-v7studio-grid-image" />
      </div>

      {/* Crafting Memories Section */}
      <div className="about-v7studio-crafting-memories">
        <h2>Crafting Memories</h2>
        <p>Your Story, My Lens</p>
        <div className="about-v7studio-memories-content">
          <p>Your wedding day is a once-in-a-lifetime event, and choosing the right photographer is essential to preserving its magic for years to come. I would be honored to be a part of your special day.</p>
          <button className="about-v7studio-btn">Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
