import React from 'react';
import Image from 'next/image'

const ICPEducationCard = () => {
  return (
    <div className="mx-auto bg-[#582727] rounded-2xl overflow-hidden shadow-lg text-white p-6 flex items-center">
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7">
            ICP <br/>Education
          </h1>
          <p className="font-thin mb-8 text-base sm:text-lg lg:text-xl px-4 sm:px-0">
            Our educational programs are designed to empower individuals and organizations
            with the expertise needed to navigate the blockchain and ICP ecosystem.
          </p>
        </div>
        <div className="w-1/3 relative">
          <div className="aspect-square relative">
            <div className="absolute inset-0 rounded-full"></div>
            <Image src={'/images/EducateCard.svg'} width={200} height={100} alt='Grant Application' loading='lazy' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICPEducationCard;