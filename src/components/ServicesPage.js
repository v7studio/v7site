import React from 'react';
import '../styles/ServicesPage.css';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <section className="services-page">
      <div className="hero-sections">
        <div className="hero-overlay">
          <h2>SERVICES</h2>
          <h1>PHOTOGRAPHY PACKAGES</h1>
        </div>
      </div>

      <div className="packages-container">
        <div className="package">
          <h3><span>INR 10K</span> BASIC PACKAGE</h3>
          <p>• Model Shoot<br />• Baby Shoot<br />• Baby Shower Shoot</p>
        </div>
        <div className="package">
          <h3><span>INR 50K</span> STANDARD PACKAGE</h3>
          <p>• Photography<br />• Videography<br />• Pre & Post Wedding in 5 locations<br />• Album page (250) 1 Nos<br />• 3 prints (8x10) Photo Frames</p>
        </div>
        <div className="package">
          <h3><span>INR 75K</span> PREMIUM PACKAGE</h3>
          <p>• Photography<br />• Videography<br />• Pre & Post Wedding in 4+4 locations<br />• Album page (500) 2 Nos<br />• 5 Prints (5x7) Photo Frames</p>
        </div>
      </div>

      <div className="cta-sectionz">
        <Link to="/contact">
            <button className="cta-buttonz">GET IN TOUCH</button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesPage;
