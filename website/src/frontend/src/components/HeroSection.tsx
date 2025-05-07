import React from 'react';

const HeroSection = () => (
  <header className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden">
    {/* Background image */}
    <img src="/images/HeroBackground.png" alt="Background" className="absolute inset-0 w-[15px] h-[15px] object-cover z-0" />
    {/* Overlay for better text contrast */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-purple-700/60 to-blue-900/70 z-10" />
    {/* Navigation */}
    <nav className="mx-auto pt-12 max-w-7xl w-full flex justify-between items-center px-8 py-6 z-20 font-light" style={{fontFamily: 'Plus Jakarta Sans', fontSize: 16}}>
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="ICP Kenya Logo" style={{width: 120, height: 20, objectFit: 'contain'}} />
      </div>
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-8 font-light">
          <li><a href="#about" className="hover:text-[#D606CE] transition">About</a></li>
          <li><a href="#education" className="hover:text-[#D606CE] transition">Education</a></li>
          <li><a href="#hire" className="hover:text-[#D606CE] transition">Hire Us</a></li>
          <li><a href="#shop" className="hover:text-[#D606CE] transition">Shop</a></li>
          <li><a href="#events" className="hover:text-[#D606CE] transition">Events</a></li>
          <li><a href="#blog" className="hover:text-[#D606CE] transition">Blog</a></li>
          <li><a href="#join" className="hover:text-[#D606CE] transition">Join Us</a></li>
        </ul>
        <button
          className="px-5 py-2 rounded-lg font-bold text-white shadow hover:scale-105 transition text-[16px]"
          style={{ fontFamily: 'Plus Jakarta Sans', background: '#D606CE' }}
        >
          Get Started
        </button>
      </div>
    </nav>
    {/* Main container for hero content and mascot */}
    <div className="mt-12 relative flex flex-col flex-1 justify-center w-full z-20">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col items-center justify-center text-center flex-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight text-white">Revolutionizing Blockchain<br />Education with ICP</h1>
        <p className="text-lg md:text-[16px] mb-10 max-w-2xl mx-auto text-white/90 font-light" style={{fontFamily: 'Plus Jakarta Sans'}}>At the forefront of technology is ICP Hub Kenya dedicated to advancing the Internet Computer ecosystem.</p>
        <div className="flex gap-4 justify-center mb-10">
          <button className="px-7 py-3 rounded-lg text-white border border-white bg-transparent shadow-lg hover:bg-white/10 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 text-[16px]" style={{fontFamily: 'Plus Jakarta Sans'}}>Start Building &rsaquo;</button>
          <button className="px-7 py-3 rounded-lg bg-white text-black shadow-md hover:bg-primary hover:text-white transition text-[16px]" style={{fontFamily: 'Plus Jakarta Sans'}}>Join Our Community</button>
        </div>
      </div>
      {/* Mascot Illustration */}
      <div className="w-full flex justify-center items-end pointer-events-none pb-2">
        <img src="/images/HeroImage.png" alt="ICP Mascot" className="w-full h-auto object-contain" style={{maxWidth: '100%'}} />
      </div>
    </div>
  </header>
);

export default HeroSection; 