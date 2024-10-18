import React from 'react';
import Image from 'next/image';

const FirstComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-br to-indigo-100 rounded-xl mx-auto max-w-7xl mt-28">
      {/* Image on top for mobile, beside text for larger screens */}
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
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          About ICP Kenya Hub
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed font-thin">
          Enroll in our free dacade course and embark on an exciting adventure into the world of decentralized applications on ICP. Complete the course and earn a Certificate and ICP Tokens!
        </p>
      </div>
    </div>
  );
};

export default FirstComponent;