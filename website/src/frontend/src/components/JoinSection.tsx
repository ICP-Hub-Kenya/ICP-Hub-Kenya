import React, { useState } from 'react';

const images = [
  '/images/gallery/gallery1.png',
  '/images/gallery/gallery2.png',
  '/images/gallery/gallery1.png',
  '/images/gallery/gallery2.png',
];

const JoinSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleImages = [images[current % images.length], images[(current + 1) % images.length]];
  return (
    <section className="w-full py-16 px-2 md:px-0 flex justify-center items-center" id="join">
      <div className="w-full max-w-5xl rounded-3xl relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: 600 }}>
        {/* Centered background image */}
        <img src="/images/HeroBackground.png" alt="Background" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-12 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white text-center">Join the Movement</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl text-center text-white/90">Stay updated on events, grants, bootcamps, and ecosystem news. Be part of Africa's most exciting Web3 community.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center w-full">
            <a href="#join" className="bg-pinkBadge text-black font-semibold px-8 py-3 rounded-lg shadow hover:bg-[#e47be6] transition text-base text-center">Join The community</a>
            <a href="#contact" className="bg-white text-black font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition text-base text-center">Contact Us</a>
          </div>
          {/* Gallery scroll */}
          <div className="flex gap-6 justify-center items-center mb-6 w-full">
            <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} className="text-3xl px-2 text-white/80 hover:text-white transition">&#8592;</button>
            <div className="flex gap-6">
              {visibleImages.map((img, idx) => (
                <img key={idx} src={img} alt="Gallery" className="w-80 h-56 object-cover rounded-xl shadow-lg bg-white" />
              ))}
            </div>
            <button onClick={() => setCurrent((current + 1) % images.length)} className="text-3xl px-2 text-white/80 hover:text-white transition">&#8594;</button>
          </div>
          {/* Dots */}
          <div className="flex gap-2 justify-center">
            {images.slice(0, images.length / 2).map((_, i) => (
              <span key={i} className={`w-3 h-3 rounded-full ${i === current % (images.length / 2) ? 'bg-white' : 'bg-white/30'} inline-block`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection; 