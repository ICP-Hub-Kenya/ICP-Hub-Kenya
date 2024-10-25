import React, { useState } from "react";

const images: string[] = [
  "/images/Gal10.jpg",
  "/images/Gal1.jpg",
  "/images/Gal9.jpg",
  "/images/Gal8.jpg",
  "/images/Gal7.jpg",
  "/images/Gal3.jpg",
  "/images/Gal4.jpg",
  "/images/Gal5.jpg",
  "/images/Gal6.jpg",
  "/images/Gal2.jpg",
];

// Simple arrow SVG components
const LeftArrow = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const RightArrow = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="py-12 px-4 relative">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">
          Our Gallery
        </h2>
        
        {/* Image Container */}
        <div className="relative mb-4 min-h-[50vh] flex items-center justify-center">
          {/* Main Image */}
          <img
            src={images[currentIndex]}
            className="object-contain max-h-[65vh] mx-auto"
            alt={`Gallery image ${currentIndex + 1}`}
          />

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-r-lg transition-colors"
            aria-label="Previous image"
          >
            <LeftArrow />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-l-lg transition-colors"
            aria-label="Next image"
          >
            <RightArrow />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center space-x-3 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-[#4f1919] w-4 h-4" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;