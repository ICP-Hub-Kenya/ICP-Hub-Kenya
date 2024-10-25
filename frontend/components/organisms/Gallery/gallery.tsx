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

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="py-12 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">Our Gallery</h2>
        <div className="mb-4">
          <img
            src={images[currentIndex]}
            className="object-contain  max-h-[65vh] mx-auto"
            alt={`Gallery image ${currentIndex + 1}`}
          />
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#4f1919]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
