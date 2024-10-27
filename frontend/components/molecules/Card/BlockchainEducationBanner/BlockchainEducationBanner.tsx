import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GradientButton from '../../../atoms/GradientButton/GradientButton';

const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const BlockchainEducationBanner = () => {
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the background image
    const img = document.createElement('img');
    img.src = '/images/HeroImage.webp';
    
    // Set a timeout for the minimum display time of the gradient
    const timer = setTimeout(() => {
      img.onload = () => {
        setIsImageLoaded(true);
      };
    }, 15000); // 15 seconds minimum gradient display
    
    return () => {
      clearTimeout(timer);
      img.onload = null;
    };
  }, []);

  const baseClasses = isDesktop
    ? 'mx-auto md:my-8 relative overflow-hidden min-h-[80vh] sm:min-h-[70vh] p-6 sm:p-10 rounded-[20px] sm:rounded-[40px] flex flex-col sm:flex-row items-center max-w-6xl'
    : 'mx-4 md:mx-8 lg:mx-16 xl:mx-48 my-10 px-6 md:px-12 py-8 md:py-16 rounded-2xl';

  const gradientClasses = 'bg-gradient-to-r from-[#6a1d1b] to-[#340a0a] shadow-xl border-[4px] border-[#400d0b]';
  const backgroundImageClasses = 'bg-[url("/images/HeroImage.webp")] bg-cover bg-center';

  const containerClass = `${baseClasses} ${isImageLoaded ? backgroundImageClasses : gradientClasses} transition-all duration-1000`;

  return (
    <div className={containerClass}>
      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center mb-10 sm:mb-0 sm:order-last">
        <div className="relative w-full max-w-[500px] h-[550px]">
          <Image 
            src="/images/HeroImage2.png"
            alt="Grant Application"
            layout="fill"
            objectFit="contain"
            className="max-w-full h-auto"
            priority // Add priority to load this image earlier
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-1/2 text-white text-base sm:pr-4 text-center sm:text-left lg:ml-6">
        <h1 className="text-5xl sm:text-4xl text-center sm:text-start lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">
          Revolutionizing <br /> Blockchain Education
        </h1>
        <p className="text-2xl font-thin mb-8 sm:text-lg lg:text-xl px-4 sm:px-0">
          At the forefront of technology is ICP Hub Kenya <br className="hidden sm:inline" />
          dedicated to advancing the Internet Computer <br className="hidden sm:inline" />
          ecosystem.
        </p>
        <div className="flex justify-center sm:justify-start">
          <GradientButton onClick={() => console.log('Explore')}>
            Explore ICP Hub Kenya
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default BlockchainEducationBanner;