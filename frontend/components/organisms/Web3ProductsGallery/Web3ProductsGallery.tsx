import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectInfo {
  src: string;
  alt: string;
  title: string;
  description: string;
  websiteLink: string;
}

const projects: ProjectInfo[] = [
  { 
    src: "/images/Web3Products/Jua.png", 
    alt: "Jua Exchange",
    title: "Jua Exchange",
    description: "Jua Exchange is a peer-to-peer cryptocurrency exchange that allows users to buy, sell, and trade cryptocurrencies across Africa using various payment methods. It is designed to facilitate easy access to cryptocurrency trading, leveraging local payment options to make transactions more accessible.",
    websiteLink: "https://jua.co.ke/"
  },
  { 
    src: "/images/Web3Products/Utu.png", 
    alt: "UTU",
    title: "UTU",
    description: "UTU aims to build a more human-friendly internet by focusing on trust infrastructure. They leverage blockchain technology to create tools that establish trust between users and platforms, improving online interactions and promoting ethical AI. Their platform is designed to enhance user experiences and decision-making by providing reliable trust metrics and fostering safer digital environments.",
    websiteLink: "https://utu.io/"
  },
  { 
    src: "/images/Web3Products/Swypt.png", 
    alt: "Swypt",
    title: "Swypt",
    description: "Swypt is a platform designed to facilitate fast, secure, and convenient crypto-to-fiat withdrawals directly from decentralized wallets. It allows users to convert their digital assets into real-world currency, crediting funds instantly to connected mobile money accounts. Swypt emphasizes low transaction fees and easy account creation through account abstraction.",
    websiteLink: "https://www.swypt.io/"
  }
];
const Web3ProductsGallery: React.FC = () => {
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
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = (): void => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
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
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
          Web3 Products
        </h2>
        <p className="text-center text-xl font-thin mb-8 sm:mb-10 px-4">
          Local projects that have integrated ICP tech into their system
        </p>

        {/* Mobile Slideshow View */}
        <div className={`${isMobile ? "block" : "hidden"}`}>
          <div className="relative mb-4 h-[50vh] sm:h-[60vh]">
            <img
              src={projects[currentIndex].src}
              alt={projects[currentIndex].alt}
              className="w-full h-full object-contain"
            />

            {/* Project info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
              <h3 className="font-bold text-xl mb-1">{projects[currentIndex].title}</h3>
              <p className="text-sm line-clamp-2">{projects[currentIndex].description}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-lg transition-colors"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-lg transition-colors"
              aria-label="Next image"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
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

        {/* Desktop Grid View with Info Cards */}
        <div
          className={`${
            isMobile ? "hidden" : "grid"
          } grid-cols-1 md:grid-cols-2 gap-8`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-4 flex items-center justify-center bg-gray-50">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <a 
                    href={project.websiteLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#4f1919] text-white rounded hover:bg-[#3a1313] transition-colors duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
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
            <div className="max-w-4xl w-full">
              <img
                src={projects[modalImage].src}
                alt={projects[modalImage].alt}
                className="max-h-[70vh] max-w-full mx-auto object-contain"
              />
              <div className="bg-white p-6 mt-4 rounded">
                <h3 className="text-xl font-bold mb-2">{projects[modalImage].title}</h3>
                <p className="text-gray-600 mb-4">{projects[modalImage].description}</p>
                <a 
                  href={projects[modalImage].websiteLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#4f1919] text-white rounded hover:bg-[#3a1313] transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Web3ProductsGallery;