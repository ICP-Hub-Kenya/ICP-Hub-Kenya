import React from 'react';
import Image from 'next/image'

interface GrantApplicationCardProps {
  isDarkMode?: boolean;
  imagePosition?: 'top' | 'bottom';
}

const GrantApplicationCard: React.FC<GrantApplicationCardProps> = ({ 
  isDarkMode = false, 
  imagePosition = 'top' 
}) => {
  const bgColor = isDarkMode ? 'bg-[#eeb83c]' : '';
  const borderRadius = isDarkMode ? '' : 'border-4 border-[#571E1E]';

  return (
    <div className={`mx-auto rounded-2xl overflow-hidden ${borderRadius} ${bgColor}`}>
      <div className={`p-6 flex flex-col sm:flex-row justify-between items-center
                      ${imagePosition === 'bottom' ? 'sm:flex-row-reverse' : ''}`}>
        <div className={`flex-1 w-full sm:w-auto ${imagePosition === 'top' ? 'order-2 sm:order-1' : 'order-2'}`}>
          <h1 className="text-4xl sm:text-4xl text-center sm:text-start lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">
            Grant Application
          </h1>
          <p className="text-gray-600 text-center sm:text-start text-2xl font-thin mb-8 sm:text-lg lg:text-xl px-4 sm:px-0">
            Our grant services are designed to provide the financial support and
            resources needed to turn your groundbreaking ideas into reality.
          </p>
        </div>
        <div className={`w-full sm:w-auto mb-6 sm:mb-0 ${imagePosition === 'top' ? 'order-1 sm:order-2' : 'order-1'}
                        ${imagePosition === 'top' ? 'sm:ml-6' : 'sm:mr-6'}`}>
          <div className="relative">
            <Image 
              src='/images/Grant.png' 
              width={200} 
              height={100} 
              alt='Grant Application' 
              loading='lazy'
              className="mx-auto sm:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantApplicationCard;