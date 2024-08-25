import React from 'react';
import '../styles/GallerySection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import img1 from '../assets/1.jpg';
import img2 from '../assets/13.jpg';
import img3 from '../assets/12.jpg';
import img4 from '../assets/20.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/21.jpg';

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2>Journey Through Our Gallery</h2>
      <p>Immerse yourself in the captivating world of photography.</p>
      <div className="gallery-images">
        <LazyLoadImage src={img1} alt="Gallery Image 1" className="gallery-imgs img1" />
        <LazyLoadImage src={img2} alt="Gallery Image 2" className="gallery-imgs img2" />
        <LazyLoadImage src={img3} alt="Gallery Image 3" className="gallery-imgs img3" />
        <LazyLoadImage src={img4} alt="Gallery Image 4" className="gallery-imgs img4" />
        <LazyLoadImage src={img5} alt="Gallery Image 5" className="gallery-imgs img5" />
        <LazyLoadImage src={img6} alt="Gallery Image 6" className="gallery-imgs img6" />
      </div>
    </section>
  );
};

export default GallerySection;
