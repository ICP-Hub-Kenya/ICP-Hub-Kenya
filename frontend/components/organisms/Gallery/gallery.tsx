import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: "/images/Gal13.jpg", alt: "Gallery image 13" },
  // { src: "/images/Gal14.jpg", alt: "Gallery image 14" },
  { src: "/images/Gal12.jpg", alt: "Gallery image 12" },
  // { src: "/images/Gal11.jpg", alt: "Gallery image 11" },
  // { src: "/images/Gal10.jpg", alt: "Gallery image 10" },
  // { src: "/images/Gal1.jpg", alt: "Gallery image 1" },
  { src: "/images/Gal9.jpg", alt: "Gallery image 9" },
  // { src: "/images/Gal8.jpg", alt: "Gallery image 8" },
  { src: "/images/Gal16.jpg", alt: "Gallery image 8" },
  // { src: "/images/Gal7.jpg", alt: "Gallery image 7" },
  // { src: "/images/Gal3.jpg", alt: "Gallery image 3" },
  { src: "/images/Gal15.jpeg", alt: "Gallery image 8" },
  // { src: "/images/Gal4.jpg", alt: "Gallery image 4" },
  { src: "/images/Gal5.jpg", alt: "Gallery image 5" },
  { src: "/images/Gal6.jpg", alt: "Gallery image 6" },
  { src: "/images/Gal18.jpg", alt: "Gallery image 12" }
  // { src: "/images/Gal2.jpg", alt: "Gallery image 2" },
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

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 tracking-tight">
          Our Gallery
        </h2>

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
