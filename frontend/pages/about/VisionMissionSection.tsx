import React from 'react';
import Image from 'next/image';

const VisionMissionComponent = () => {
  return (
    <div className="bg-[#212121] text-white p-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full sm:h-[100vh] h-[150vh] flex flex-col">
        {/* Group Photo */}
        <div className="relative mb-8 rounded-lg overflow-hidden w-full h-[200px] sm:h-[300px]">
          <Image
            src="/images/Mission.png"
            alt="Group photo of blockchain enthusiasts"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Vision and Mission */}
        <div className="grid sm:grid-cols-2 gap-8 flex-1 justify-center items-center">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl text-center font-bold mb-4 tracking-[-0.08em]">
              Our Vision
            </h1>
            <p className="text-center sm:text-left text-lg sm:text-xl font-thin px-2 sm:px-0">
              We&apos;re dedicated to democratizing blockchain technology through
              accessible education and empowering developers to create real
              decentralized applications on the Internet Computer platform.
              Through collaboration within the blockchain industry, we drive
              innovation and progress.
            </p>
          </div>
          <div className="relative sm:border-l sm:border-gray-300 sm:pl-8">
            <h1 className="text-4xl sm:text-5xl text-center font-bold mb-4 tracking-[-0.08em]">
              Our Mission
            </h1>
            <p className="text-center sm:text-left text-lg sm:text-xl font-thin px-2 sm:px-0">
              We envision a world where blockchain technology empowers
              individuals and organizations, enabling them to unlock their full
              potential. The Internet Computer is our chosen vessel for this
              vision, and we are dedicated to fueling its growth and adoption
              throughout East Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionComponent;