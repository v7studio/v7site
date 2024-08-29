import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Importing assets
import mainHeroImage from '../assets/23.jpg';
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

// Importing mobile-specific styles
import '../styles/MobileHomepage.css';

const MobileHomepage = () => {
  return (
    <div className="mh-container">
      {/* Mobile Hero Section */}
      <section className="mh-hero-section">
        <div className="mh-hero-content">
          <h1>See the World, Capture the Moments</h1>
          <p>
            We specialize in capturing life's cherished moments and turning them into timeless art. Let us tell your story through our lens.
          </p>
          <Link to="/about">
            <button className="mh-cta-button">Know About Us ➔</button>
          </Link>
        </div>
        <div className="mh-hero-image">
          <LazyLoadImage src={mainHeroImage} alt="Main Photography" effect="blur" className="mh-main-image" />
        </div>
      </section>

      {/* Mobile Photography Experience Section */}
      <section className="mh-experience-section">
        <div className="mh-experience-content">
          <h2>Experience Photography Like Never Before</h2>
          <p>
            Transforming ordinary moments into extraordinary memories with our state-of-the-art equipment and artistic vision.
          </p>
        </div>
        <LazyLoadImage src={experienceImage} alt="Photography Experience" effect="blur" className="mh-experience-image" />
        <button className="mh-cta-button">Explore Our Portfolio ➔</button>
      </section>

      {/* Mobile Expertise Section */}
      <section className="mh-expertise-section">
        <h2>Our Expertise</h2>
        <div className="mh-expertise-cards">
          <div className="mh-expertise-card">
            <LazyLoadImage src={equipmentIcon} alt="Extensive equipment" effect="blur" />
            <h3>Extensive Equipment</h3>
          </div>
          <div className="mh-expertise-card">
            <LazyLoadImage src={shootsIcon} alt="Long hour shoots" effect="blur" />
            <h3>Long Hour Shoots</h3>
          </div>
          <div className="mh-expertise-card">
            <LazyLoadImage src={editingIcon} alt="Professional editing" effect="blur" />
            <h3>Professional Editing</h3>
          </div>
          <div className="mh-expertise-card">
            <LazyLoadImage src={droneIcon} alt="Drone Photography" effect="blur" />
            <h3>Drone Photography</h3>
          </div>
          <div className="mh-expertise-card">
            <LazyLoadImage src={eventIcon} alt="Event Management" effect="blur" />
            <h3>Event Management</h3>
          </div>
        </div>
      </section>

      {/* Mobile Creativity Section */}
      <section className="mh-creativity-section">
        <h2>Creativity in Every Shot</h2>
        <div className="mh-creativity-images">
          <LazyLoadImage src={creativityImg1} alt="Gallery Image 1" effect="blur" className="mh-gallery-img" />
          <LazyLoadImage src={creativityImg2} alt="Gallery Image 2" effect="blur" className="mh-gallery-img" />
          <LazyLoadImage src={creativityImg3} alt="Gallery Image 3" effect="blur" className="mh-gallery-img" />
          <LazyLoadImage src={creativityImg4} alt="Gallery Image 4" effect="blur" className="mh-gallery-img" />
          <LazyLoadImage src={creativityImg5} alt="Gallery Image 5" effect="blur" className="mh-gallery-img" />
        </div>
        <p>With years of experience, we've captured countless moments and crafted stunning visuals, earning awards and recognition.</p>
      </section>

      {/* Mobile Vision Expertise Section */}
      <section className="mh-vision-expertise-section">
        <h2>Your Vision, Our Expertise</h2>
        <div className="mh-vision-images">
          <LazyLoadImage src={visionImg1} alt="Vision Image 1" effect="blur" className="mh-vision-img" />
          <LazyLoadImage src={visionImg2} alt="Vision Image 2" effect="blur" className="mh-vision-img" />
          <LazyLoadImage src={visionImg3} alt="Vision Image 3" effect="blur" className="mh-vision-img" />
        </div>
        <p>We collaborate closely with you to bring your vision to life.</p>
        <button className="mh-cta-button">Request a Consultation</button>
      </section>

      {/* Mobile Gallery Section */}
      <section className="mh-gallery-section">
        <h2>Gallery</h2>
        <div className="mh-gallery-images">
          <LazyLoadImage src={galleryImg1} alt="Gallery Image 1" className="mh-gallery-img" />
          <LazyLoadImage src={galleryImg2} alt="Gallery Image 2" className="mh-gallery-img" />
          <LazyLoadImage src={galleryImg3} alt="Gallery Image 3" className="mh-gallery-img" />
          <LazyLoadImage src={galleryImg4} alt="Gallery Image 4" className="mh-gallery-img" />
          <LazyLoadImage src={galleryImg5} alt="Gallery Image 5" className="mh-gallery-img" />
          <LazyLoadImage src={galleryImg6} alt="Gallery Image 6" className="mh-gallery-img" />
        </div>
      </section>
    </div>
  );
}

export default MobileHomepage;
