import React, { useState } from 'react';

const images = [
  '/join1.jpg',
  '/join2.jpg',
  '/join3.jpg',
];

const JoinSection = () => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-primary via-purple-500 to-blue-500 text-white" id="join">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-8 max-w-2xl">Stay updated on events, grants, bootcamps, and ecosystem news. Be part of Africa's most exciting Web3 community.</p>
        <div className="flex gap-4 mb-8">
          <a href="#join" className="bg-badge text-dark font-bold px-6 py-3 rounded-lg shadow hover:bg-primary hover:text-white transition">Join the Community</a>
          <a href="#contact" className="bg-white/10 border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition">Contact us</a>
        </div>
        {/* Simple image slider */}
        <div className="flex gap-4 justify-center items-center mb-4">
          <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} className="text-2xl px-2">&#8592;</button>
          <img src={images[current]} alt="Join the Movement" className="w-64 h-40 object-cover rounded-xl shadow-lg" />
          <button onClick={() => setCurrent((current + 1) % images.length)} className="text-2xl px-2">&#8594;</button>
        </div>
        <div className="flex gap-2 justify-center">
          {images.map((_, i) => (
            <span key={i} className={`w-3 h-3 rounded-full ${i === current ? 'bg-badge' : 'bg-white/30'} inline-block`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSection; 