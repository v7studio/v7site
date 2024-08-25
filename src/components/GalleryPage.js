import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import Firestore
import { collection, getDocs } from 'firebase/firestore';
import '../styles/GalleryPage.css';

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesCollection = await getDocs(collection(db, 'gallery'));
        const imagesData = imagesCollection.docs.map(doc => doc.data());
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };

    fetchImages();
  }, []);

  const filterImages = () => {
    if (selectedCategory === 'All') return images;
    return images.filter(image => image.category === selectedCategory);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section className="gallery-page">
      <div className="hero-section">
        <h1>Gallery</h1>
      </div>
      <div className="filter-section">
        <ul>
          <li 
            onClick={() => setSelectedCategory('All')} 
            className={selectedCategory === 'All' ? 'active' : ''}
          >
            All
          </li>
          <li 
            onClick={() => setSelectedCategory('Wedding')} 
            className={selectedCategory === 'Wedding' ? 'active' : ''}
          >
            Wedding
          </li>
          <li 
            onClick={() => setSelectedCategory('College Events')} 
            className={selectedCategory === 'College Events' ? 'active' : ''}
          >
            College Events
          </li>
          <li 
            onClick={() => setSelectedCategory('Birthday Events')} 
            className={selectedCategory === 'Birthday Events' ? 'active' : ''}
          >
            Birthday Events
          </li>
          <li 
            onClick={() => setSelectedCategory('Nature')} 
            className={selectedCategory === 'Nature' ? 'active' : ''}
          >
            Nature
          </li>
        </ul>
      </div>
      <div className="image-grid">
        {filterImages().map((image, index) => (
          <div 
            key={index} 
            className="image-item" 
            onClick={() => openModal(image)} // Open modal on click
          >
            <img 
              src={image.url} 
              alt={image.name} 
              loading="lazy"  // Lazy loading images
              srcSet={`${image.url}?w=300 300w, ${image.url}?w=600 600w`}  // Responsive images
              sizes="(max-width: 600px) 300px, 600px"  // Define sizes for responsive images
            />
            <div className="overlay">{image.name}</div>
          </div>
        ))}
      </div>

      {/* Modal for displaying full image */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage.url} alt={selectedImage.name} className="full-image" />
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
