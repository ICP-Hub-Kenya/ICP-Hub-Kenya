import React from 'react';
import Image from 'next/image'

interface InnovationIncubatorCardProps {
  isDarkMode?: boolean;
}

const InnovationIncubatorCard: React.FC<InnovationIncubatorCardProps> = ({ isDarkMode = false }) => {
  const bgColor = isDarkMode ? 'bg-[#fff4f3]' : 'bg-[#252525]';
  const textColor = isDarkMode ? 'text-black' : 'text-white';
  // const shadowColor = isDarkMode ? 'text-black' : 'shadow-gray-300';

  return (
    <div className={`max-w-2xl mx-auto ${bgColor} ${textColor} rounded-2xl overflow-hidden p-6 flex items-center`}>
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-6 mt-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7">
            Innovation Incubator
          </h1>
          <p className={`font-thin mb-8 text-base sm:text-lg lg:text-xl px-4 sm:px-0 ${isDarkMode ? 'text-black' : 'text-white'}`}>
            Our Incubator Program is at the heart of our mission to inspire creativity and
            drive progress within the blockchain and Internet Computer community.
          </p>
        </div>
        <div className="w-1/3">
          <Image src={'/images/InnovatorCard.svg'} width={200} height={100} alt='Grant Application' loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default InnovationIncubatorCard;