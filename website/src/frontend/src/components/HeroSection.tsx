import React, { useState } from 'react';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden">
      {/* Background image */}
      <img src="/images/HeroBackground.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-purple-700/60 to-blue-900/70 z-10" />
      {/* Navigation */}
      <nav className="mx-auto pt-6 md:pt-12 max-w-7xl w-full flex flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 z-20 font-light relative" style={{fontFamily: 'Plus Jakarta Sans', fontSize: 16}}>
        <div className="flex items-center gap-2 mb-0">
          <img src="/images/logo.png" alt="ICP Kenya Logo" style={{width: 120, height: 20, objectFit: 'contain'}} />
        </div>
        {/* Hamburger icon for mobile */}
        <button
          className="block md:hidden ml-auto text-white focus:outline-none z-30"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        {/* Desktop nav links and button */}
        <div className="hidden md:flex flex-row items-center gap-8 w-full md:w-auto">
          <ul className="flex flex-row gap-8 font-light items-center">
            <li><a href="#about" className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">About</a></li>
            <li><a href="https://dacade.org/communities/icp" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Education</a></li>
            <li><a href="https://smart-devstudios.com/" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Hire Us</a></li>
            <li><a href="shop" className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Shop</a></li>
            <li><a href="https://lu.ma/user/usr-RgJYUVo8GJUSfXd" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Events</a></li>
            <li><a href="https://icphub-ke.medium.com/" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Blog</a></li>
            <li><a href="https://t.me/icphub_KE" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Join Us</a></li>
          </ul>
          <button
            className="px-5 py-2 rounded-lg font-bold text-white shadow transition text-[16px] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            style={{ fontFamily: 'Plus Jakarta Sans', background: '#D606CE' }}
            onClick={() => {
              window.open("https://t.me/icphub_KE", '_blank');
            }}
          >
            Get Started
          </button>
        </div>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 animate-fade-in">
            <button
              className="absolute top-6 right-6 text-black text-3xl focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <ul className="flex flex-col gap-6 font-light items-center text-2xl text-black">
              <li><a href="#about" className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="https://dacade.org/communities/icp" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Education</a></li>
              <li><a href="https://smart-devstudios.com/" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Hire Us</a></li>
              <li><a href="shop" className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Shop</a></li>
              <li><a href="https://lu.ma/user/usr-RgJYUVo8GJUSfXd" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Events</a></li>
              <li><a href="https://icphub-ke.medium.com/" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Blog</a></li>
              <li><a href="https://t.me/icphub_KE" target='_blank' className="hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Join Us</a></li>
            </ul>
            <button
              className="mt-8 px-7 py-3 rounded-lg font-bold text-white shadow transition text-[20px] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              style={{ fontFamily: 'Plus Jakarta Sans', background: '#D606CE' }}
              onClick={() => {
                window.open("https://t.me/icphub_KE", '_blank');
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
      {/* Main container for hero content and mascot */}
      {!menuOpen && (
        <div className="mt-6 md:mt-12 relative flex flex-col flex-1 justify-center w-full z-20">
          <div className="max-w-7xl mx-auto w-full px-4 flex flex-col items-center justify-center text-center flex-1">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight text-white">Revolutionizing Blockchain<br />Education with ICP</h1>
            <p className="text-base md:text-[16px] mb-6 md:mb-10 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto text-white/90 font-light" style={{fontFamily: 'Plus Jakarta Sans'}}>At the forefront of technology is ICP Hub Kenya dedicated to advancing the Internet Computer ecosystem.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-10 w-full sm:w-auto">
              <button 
                onClick={() => {
                  window.open("https://dacade.org/communities/icp", '_blank');
                }}
                className="px-7 py-3 rounded-lg text-white border border-white bg-transparent shadow-lg transition-transform duration-200 hover:bg-white/10 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-[16px] font-bold" style={{fontFamily: 'Plus Jakarta Sans'}}>
                  Start Building &rsaquo;
              </button>
              <button 
                onClick={() => {
                  window.open("https://t.me/icphub_KE", '_blank');
                }}
                className="px-7 py-3 rounded-lg bg-white text-black shadow-md transition hover:bg-primary hover:text-white hover:scale-105 hover:shadow-xl text-[16px] font-bold" style={{fontFamily: 'Plus Jakarta Sans'}}>Join Our Community</button>
            </div>
          </div>
          {/* Mascot Illustration */}
          <div className="w-full flex justify-start items-end pointer-events-none pb-0 relative">
            <img
              src="/images/HeroImage.png"
              alt="ICP Mascot"
              className="w-[140vw] min-w-[100vw] h-auto object-contain object-left -translate-y-2 sm:-translate-y-6 md:-translate-y-10"
              style={{ left: 0, position: 'relative' }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default HeroSection; 