import React, { useState, useEffect } from 'react';
import './Carousal.css';

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/banner1 (1).webp', alt: 'The Last of Us' },
    { src: '/banner2 (1).webp', alt: 'GTA V' },
    { src: '/banner3 (1).webp', alt: 'Mirror Edge' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousal-container">
      <button className="carousal-button" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="carousal-slide">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      </div>
      <button className="carousal-button" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousal;
