import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/img/max-verstappen-red-bull-racing.jpg',
    '/img/d2588cfd29f9fdcfbf61f133b572cd8d.webp',
    '/img/Jorge-Martin-2023-MotoGP-Malaysia.webp',
    // Add more image paths as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '100%', height: 'auto' }}
      />
      <br />
      <button onClick={prevSlide}>&#10094; Prev</button>
      <button onClick={nextSlide}>Next &#10095;</button>
    </div>
  );
};

export default Slideshow;
