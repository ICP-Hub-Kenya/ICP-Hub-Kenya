<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const images = [
  "/images/Gal11.jpg",
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

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prevSet => {
            const newSet = new Set(prevSet);
            newSet.add(src);
            return newSet;
          });
        };
      });
    };
    preloadImages();
  }, []);

  // Preload adjacent images
  useEffect(() => {
    const preloadAdjacent = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      
      [images[prevIndex], images[currentIndex], images[nextIndex]].forEach(src => {
        if (!loadedImages.has(src)) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setLoadedImages(prevSet => {
              const newSet = new Set(prevSet);
              newSet.add(src);
              return newSet;
            });
          };
        }
      });
    };
    preloadAdjacent();
  }, [currentIndex, loadedImages]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);
=======
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: "/images/Gal10.jpg", alt: "Gallery image 10" },
  { src: "/images/Gal1.jpg", alt: "Gallery image 1" },
  { src: "/images/Gal9.jpg", alt: "Gallery image 9" },
  { src: "/images/Gal8.jpg", alt: "Gallery image 8" },
  { src: "/images/Gal7.jpg", alt: "Gallery image 7" },
  { src: "/images/Gal3.jpg", alt: "Gallery image 3" },
  { src: "/images/Gal4.jpg", alt: "Gallery image 4" },
  { src: "/images/Gal5.jpg", alt: "Gallery image 5" },
  { src: "/images/Gal6.jpg", alt: "Gallery image 6" },
  { src: "/images/Gal2.jpg", alt: "Gallery image 2" },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Handle screen size changes
  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Navigation functions
  const goToPrevious = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (): void => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Modal functions
  const openModal = (index: number): void => {
    setModalImage(index);
    setIsModalOpen(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (!isModalOpen && isMobile) {
        if (event.key === "ArrowLeft") {
          goToPrevious();
        } else if (event.key === "ArrowRight") {
          goToNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, isMobile]);
>>>>>>> b695485d157bbbeeeeeba662ee4fcf768465c556

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 tracking-tight">
          Our Gallery
        </h2>
<<<<<<< HEAD
        
        <div className="relative mb-4 min-h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Hidden preload container */}
          <div className="hidden">
            {images.map((src, index) => (
              <img 
                key={`preload-${index}`}
                src={src}
                alt=""
                className="hidden"
              />
            ))}
          </div>

          {/* Main Image with transition */}
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <img
              src={images[currentIndex]}
              className="object-contain max-h-[65vh] mx-auto"
              alt={`Gallery image ${currentIndex + 1}`}
              style={{ 
                opacity: loadedImages.has(images[currentIndex]) ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-r-lg transition-colors disabled:opacity-50"
            aria-label="Previous image"
          >
            <LeftArrow />
          </button>
          
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-l-lg transition-colors disabled:opacity-50"
            aria-label="Next image"
          >
            <RightArrow />
          </button>
=======

        {/* Mobile Slideshow View */}
        <div className={`${isMobile ? "block" : "hidden"}`}>
          <div className="relative mb-4 h-[50vh] sm:h-[60vh]">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain"
            />

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-lg transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-lg transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#4f1919] w-3.5 h-3.5"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
>>>>>>> b695485d157bbbeeeeeba662ee4fcf768465c556
        </div>

        {/* Desktop Grid View */}
        <div
          className={`${
            isMobile ? "hidden" : "grid"
          } grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
        >
          {images.map((image, index) => (
            <div
              key={index}
<<<<<<< HEAD
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-[#4f1919] w-4 h-4" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 300);
                }
              }}
              aria-label={`Go to image ${index + 1}`}
            />
=======
              className="relative group aspect-square overflow-hidden bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
>>>>>>> b695485d157bbbeeeeeba662ee4fcf768465c556
          ))}
        </div>

        {/* Fullscreen Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={images[modalImage].src}
              alt={images[modalImage].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
