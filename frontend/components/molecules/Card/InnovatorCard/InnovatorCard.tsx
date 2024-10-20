import React from 'react';
import Image from 'next/image'

interface InnovationIncubatorCardProps {
  isDarkMode?: boolean;
  imagePosition?: 'top' | 'bottom';
}

const InnovationIncubatorCard: React.FC<InnovationIncubatorCardProps> = ({ 
  isDarkMode = false,
  imagePosition = 'top'
}) => {
  const bgColor = isDarkMode ? 'bg-[#fff4f3]' : 'bg-[#252525]';
  const textColor = isDarkMode ? 'text-black' : 'text-white';

  return (
    <div className={`max-w-2xl mx-auto ${bgColor} ${textColor} rounded-2xl overflow-hidden p-6`}>
      <div className={`flex flex-col ${imagePosition === 'bottom' ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center`}>
        <div className={`w-full sm:w-2/3 ${imagePosition === 'top' ? 'order-2 sm:order-1' : 'order-2'} sm:pr-6`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 sm:text-start text-center">
            Innovation Incubator
          </h1>
          <p className={`text-2xl text-center sm:text-start font-thin mb-8 sm:text-lg lg:text-xl px-4 sm:px-0 ${isDarkMode ? 'text-black' : 'text-white'}`}>
            Our Incubator Program is at the heart of our mission to inspire creativity and
            drive progress within the blockchain and Internet Computer community.
          </p>
        </div>
        <div className={`w-full sm:w-1/3 mb-6 sm:mb-0 ${imagePosition === 'top' ? 'order-1 sm:order-2' : 'order-1'}`}>
          <div className="aspect-square relative mx-auto sm:mx-0" style={{ maxWidth: '200px' }}>
            <Image 
              src='/images/InnovatorCard.svg' 
              width={200} 
              height={200} 
              alt='Innovation Incubator' 
              loading='lazy'
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationIncubatorCard;