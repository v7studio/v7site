import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Importing assets
import mainHeroImage from '../assets/23.jpg';
import secondaryImage1 from '../assets/20.jpg';
import secondaryImage2 from '../assets/20.jpg';

import experienceImage from '../assets/u.png';

import editingIcon from '../assets/editing-icon.gif';
import shootsIcon from '../assets/shoots-icon.gif';
import equipmentIcon from '../assets/equipment-icon.gif';
import droneIcon from '../assets/drone-icon.gif';
import eventIcon from '../assets/event-icon.gif';

import creativityImg1 from '../assets/6.jpg';
import creativityImg2 from '../assets/9.jpg';
import creativityImg3 from '../assets/8.jpg';
import creativityImg4 from '../assets/9.jpg';
import creativityImg5 from '../assets/10.jpg';

import visionImg1 from '../assets/11.jpg';
import visionImg2 from '../assets/13.jpg';
import visionImg3 from '../assets/17.jpg';

import galleryImg1 from '../assets/1.jpg';
import galleryImg2 from '../assets/13.jpg';
import galleryImg3 from '../assets/12.jpg';
import galleryImg4 from '../assets/20.jpg';
import galleryImg5 from '../assets/5.jpg';
import galleryImg6 from '../assets/21.jpg';

// Importing styles
import '../styles/Homepage/HeroSection.css';
import '../styles/Homepage/PhotographyExperienceSection.css';
import '../styles/Homepage/ExpertiseSection.css';
import '../styles/Homepage/CreativitySection.css';
import '../styles/Homepage/VisionExpertiseSection.css';
import '../styles/Homepage/GallerySection.css';

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>See the world,</h1>
          <h1>capture </h1>
          <h1>the moments</h1>
          <p>
            At V7Studios, we specialize in capturing life's most cherished moments 
            and turning them into timeless works of art. Our team of passionate 
            photographers is dedicated to telling stories through the lens, ensuring 
            that every shot encapsulates the essence of your unique journey.
          </p>
          <Link to="/about">
            <button className="cta-button">Know About Us ➔</button>
          </Link>
        </div>
        <div className="hero-images">
          <LazyLoadImage src={mainHeroImage} alt="Main Photography" effect="blur" className="main-image" />
          <div className="empty-card empty-card-top"></div>
          <div className="empty-card empty-card-bottom"></div>
          <div className="secondary-images">
            <LazyLoadImage src={secondaryImage1} alt="Secondary Photography 1" effect="blur" className="secondary-imagez" />
            <LazyLoadImage src={secondaryImage2} alt="Secondary Photography 2" effect="blur" className="secondary-imagez" />
          </div>
        </div>
      </section>

      {/* Photography Experience Section */}
      <section className="experience-section">
        <div className="experience-images">
          <div className="image-container">
            <LazyLoadImage src={experienceImage} alt="Main Experience" effect="blur" className="main-image" />
          </div>
        </div>
        <div className="experience-content">
          <h3>Immortalize Your Memories</h3>
          <h2>Experience Photography Like Never Before</h2>
          <p>
            With our state-of-the-art equipment and artistic vision, we transform ordinary moments into 
            extraordinary memories. Our talented photographers...
          </p>
          <Link to="/portfolio">
            <button className="cta-buttons">Explore Our Portfolio ➔</button>
          </Link>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <h2>Explore Our Expertise</h2>
        <div className="expertise-carousel">
          <div className="expertise-card">
            <LazyLoadImage src={equipmentIcon} alt="Extensive equipment" effect="blur" />
            <h3>Extensive equipment</h3>
            <p>Empower your vision with our state-of-the-art equipment tailored to bring your ideas to life.</p>
          </div>
          <div className="expertise-card">
            <LazyLoadImage src={shootsIcon} alt="Long hour shoots" effect="blur" />
            <h3>Long hour shoots</h3>
            <p>Endurance meets creativity—our team is equipped to capture every moment, no matter how long it takes.</p>
          </div>
          <div className="expertise-card">
            <LazyLoadImage src={editingIcon} alt="Professional editing" effect="blur" />
            <h3>Professional editing</h3>
            <p>Enhance your project with our expert editing services, where precision and creativity meet.</p>
          </div>
          <div className="expertise-card">
            <LazyLoadImage src={droneIcon} alt="Drone Photography" effect="blur" />
            <h3>Drone Photography</h3>
            <p>Capture stunning aerial shots with our advanced drone services.</p>
          </div>
          <div className="expertise-card">
            <LazyLoadImage src={eventIcon} alt="Event Management" effect="blur" />
            <h3>Event Management</h3>
            <p>We manage your events with professionalism and creativity.</p>
          </div>
        </div>
      </section>

      {/* Creativity Section */}
      <section className="creativity-section">
        <div className="creativity-images">
          <LazyLoadImage src={creativityImg1} alt="Gallery Image 1" effect="blur" className="gallery-img gallery-img1" />
          <LazyLoadImage src={creativityImg2} alt="Gallery Image 2" effect="blur" className="gallery-img gallery-img2" />
          <LazyLoadImage src={creativityImg3} alt="Gallery Image 3" effect="blur" className="gallery-img gallery-img3" />
          <LazyLoadImage src={creativityImg4} alt="Gallery Image 4" effect="blur" className="gallery-img gallery-img4" />
          <LazyLoadImage src={creativityImg5} alt="Gallery Image 5" effect="blur" className="gallery-img gallery-img5" />
          <div className="empty-cardz empty-card-x"></div>
        </div>
        <div className="creativity-content">
          <div className="empty-cards empty-card-t"></div>
          <h2>Unmatched <br/>Creativity</h2>
          <p>
            With over a year of experience, we have captured countless moments and crafted stunning visuals. 
            Our team's dedication and passion have led to numerous awards and recognition. 
            Join the growing number of satisfied clients who have experienced the magic V7Studio.
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

      {/* Vision Expertise Section */}
      <section className="vision-expertise-section">
        <div className="vision-content">
          <h2>Your Vision, Our <br/>Expertise</h2>
          <p>
            At V7Studio, we understand that every client has unique needs and desires.
            That's why we collaborate closely with you, ensuring that your vision is brought to life.
          </p>
          <Link to="/contact">
            <button className="consultation-button">Request a Consultation</button>
          </Link>
        </div>
        <div className="vision-images">
          <div className="image-container image-container-1">
            <LazyLoadImage src={visionImg1} alt="Client Image 1" effect="blur" className="gallery-image gallery-image-1" />
          </div>
          <div className="image-container image-container-2">
            <LazyLoadImage src={visionImg2} alt="Client Image 2" effect="blur" className="gallery-image gallery-image-2" />
          </div>
          <div className="image-container image-container-3">
            <LazyLoadImage src={visionImg3} alt="Client Image 3" effect="blur" className="gallery-image gallery-image-3" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Journey Through Our Gallery</h2>
        <p>Immerse yourself in the captivating world of photography.</p>
        <div className="gallery-images">
          <LazyLoadImage src={galleryImg1} alt="Gallery Image 1" className="gallery-imgs img1" />
          <LazyLoadImage src={galleryImg2} alt="Gallery Image 2" className="gallery-imgs img2" />
          <LazyLoadImage src={galleryImg3} alt="Gallery Image 3" className="gallery-imgs img3" />
          <LazyLoadImage src={galleryImg4} alt="Gallery Image 4" className="gallery-imgs img4" />
          <LazyLoadImage src={galleryImg5} alt="Gallery Image 5" className="gallery-imgs img5" />
          <LazyLoadImage src={galleryImg6} alt="Gallery Image 6" className="gallery-imgs img6" />
        </div>
      </section>
    </>
  );
}

export default Homepage;
