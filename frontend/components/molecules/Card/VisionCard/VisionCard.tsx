import React from 'react';

const VisionVideoCard = () => {
  return (
    <div className="mx-auto max-w-6xl rounded-2xl overflow-hidden p-8">
      <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">
        What is the Vision of ICP blockchain?
      </h1>
      <p className="font-thin mb-8 text-base sm:text-lg lg:text-xl px-4 sm:px-0 text-center">
        ICP&apos;s vision is that most of the world&apos;s software will be replaced by smart contracts. To realize that
        vision, ICP is designed to make smart contracts as powerful as traditional software.
      </p>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/mqLoCgpDotI"
          title="What is the Vision of ICP blockchain?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VisionVideoCard;