import React, { useState } from "react";

export default function Carousel({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

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
    <div className="carousel-overlay">
      <div className="carousel-container">
        {/* Close Button */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/32/32178.png"
          alt="Close"
          className="carousel-close"
          onClick={onClose}
        />

        {/* Previous Button */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/151/151846.png"
          alt="Previous"
          className="carousel-button prev"
          onClick={handlePrev}
        />

        {/* Current Image */}
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].name}
          className="carousel-image"
        />

        {/* Next Button */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/151/151858.png"
          alt="Next"
          className="carousel-button next"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
