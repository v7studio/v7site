import React from 'react';
import '../styles/AboutPage.css'; // Updated CSS file name
import ProfileImg from '../assets/8.1.jpg';
import Img1 from '../assets/8.jpg'; // Replace with actual image paths
import Img2 from '../assets/9.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="unique-about-page">
      <section className="unique-my-story-section">
        <div className="unique-content-wrapper">
          <div className="unique-image-container">
            <img src={ProfileImg} alt="Profile" className="unique-profile-image" />
          </div>
          <div className="unique-text-container">
            <h1 className="unique-about-title">My Story</h1>
            <p className="unique-about-text">
              At V7Studio, we believe that every moment is worth capturing, and every story deserves to be told. What started as a small passion for photography has grown into a full-fledged studio dedicated to bringing your memories to life. 
              With years of experience in capturing weddings, portraits, and events, our goal is to not just take photos, but to craft images that resonate with emotion and authenticity.
            </p>
            <Link to="/Gallery">
              <button className="unique-portfolio-button">View Portfolio</button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="unique-crafting-memories-section">
        <div className="unique-crafting-content">
          <div className="unique-crafting-text-container">
            <h2 className="unique-section-title">Crafting Memories</h2>
            <h3 className="unique-section-subtitle">Your Story, My Lens</h3>
            <p className="unique-crafting-text">
              Your wedding day is a once-in-a-lifetime event, and choosing the right photographer is essential to preserving its magic for years to come.
              I would be honored to be a part of your special day.
            </p>

            <p className="unique-crafting-text">
              Your wedding day is a once-in-a-lifetime event, and choosing the right photographer is essential to preserving its magic for years to come.
              I would be honored to be a part of your special day.
            </p>
            <Link to="/contact">
              <button className="unique-book-now-button">Book Now</button>
            </Link>
          </div>
          <div className="unique-crafting-images">
            <img src={Img1} alt="Wedding 1" className="unique-crafting-image unique-crafting-image-1" />
            <img src={Img2} alt="Wedding 2" className="unique-crafting-image unique-crafting-image-2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
