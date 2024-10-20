import React from 'react';
import Image from 'next/image'

interface ICPEducationCardProps {
  imagePosition?: 'top' | 'bottom';
}

const ICPEducationCard: React.FC<ICPEducationCardProps> = ({ imagePosition = 'top' }) => {
  return (
    <div className="mx-auto bg-[#582727] rounded-2xl overflow-hidden shadow-lg text-white p-6">
      <div className={`flex flex-col ${imagePosition === 'bottom' ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center`}>
        <div className={`w-full sm:w-2/3 ${imagePosition === 'top' ? 'order-2 sm:order-1' : 'order-2'} sm:pr-6`}>
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 sm:text-start text-center">
          <span className="block sm:inline">
            ICP <span className="hidden sm:inline"><br/></span> Education
          </span>
          </h1>
          <p className="text-2xl text-center sm:text-start font-thin mb-8 sm:text-lg lg:text-xl px-4 sm:px-0">
            Our educational programs are designed to empower individuals and organizations
            with the expertise needed to navigate the blockchain and ICP ecosystem.
          </p>
        </div>
        <div className={`w-full sm:w-1/3 mb-14 sm:mb-0 ${imagePosition === 'top' ? 'order-1 sm:order-2' : 'order-1'}`}>
          <div className="aspect-square relative mx-auto sm:mx-0" style={{ maxWidth: '200px' }}>
            <div className="absolute inset-0 rounded-full"></div>
            <Image 
              src='/images/EducateCard.svg' 
              width={150} 
              height={50} 
              alt='ICP Education' 
              loading='lazy'
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICPEducationCard;