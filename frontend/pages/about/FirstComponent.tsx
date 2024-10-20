import React from 'react';
import Image from 'next/image';
import GradientButton from '../../components/atoms/GradientButton/GradientButton';

const FirstComponent = () => {
  return (
    <div className="h-screen md:h-[70vh] flex flex-col md:flex-row-reverse items-center gap-8 p-8 bg-gradient-to-br to-indigo-100 rounded-xl mx-auto max-w-7xl mt-28">
      
      {/* Image on top for mobile, on the right side for desktop */}
      <div className="flex-1 grid grid-cols-2 gap-6 order-1 md:order-none">
        <div className="col-span-2 flex justify-center items-center">
          <Image 
            src={'/images/About.svg'} 
            width={450} 
            height={300} 
            alt='Grant Application' 
            loading='lazy'
            className="rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
          />
        </div>
      </div>
      
      {/* Text content appears below the image on mobile, beside it on larger screens */}
      <div className="flex-1 space-y-6 order-2 md:order-none mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">
          About ICP Kenya Hub
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed font-thin">
          Welcome to ICP Hub Kenya, a pioneering force dedicated to advancing blockchain technology across the region and beyond. 
          As one of the esteemed ICP Hubs worldwide, our mission is clear: to empower individuals and organizations through education, 
          collaboration, and innovation in the realm of blockchain. With a steadfast commitment to fostering a 
          vibrant ecosystem, we strive to catalyze growth, drive adoption, and unlock the transformative 
          potential of blockchain technology for a brighter future. Join us on this journey as we shape the 
          landscape of tomorrow, one block at a time in Africa.
        </p>
        <GradientButton onClick={() => console.log("Contact!")}>
          Contact Us 
        </GradientButton>
      </div>
    </div>
  );
};

export default FirstComponent;