import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mx-auto pt-6 md:pt-12 max-w-7xl w-full flex flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 z-20 font-light relative" style={{fontFamily: 'Plus Jakarta Sans', fontSize: 16}}>
      <div className="flex items-center gap-2 mb-0">
        <a href="/">
          <img src="/images/BlackLogo.png" alt="ICP Kenya Logo" style={{width: 120, height: 20, objectFit: 'contain'}} />
        </a>
      </div>
      {/* Hamburger icon for mobile */}
      <button
        className="block md:hidden ml-auto text-black focus:outline-none z-30"
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
          <li><a href="#about" className="text-black hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">About</a></li>
          <li><a href="https://dacade.org/communities/icp" target='_blank' className="text-black hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Education</a></li>
          <li><a href="https://smart-devstudios.com/" target='_blank' className="text-black hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Hire Us</a></li>
          <li><a href="shop" className="text-black hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Shop</a></li>
          <li><a href="https://lu.ma/user/usr-RgJYUVo8GJUSfXd" target='_blank' className="text-black hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Events</a></li>
          <li><a href="https://icphub-ke.medium.com/" target='_blank' className="text-black hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Blog</a></li>
          <li><a href="https://t.me/icphub_KE" target='_blank' className="text-black hover:text-[#D606CE] hover:underline underline-offset-4 transition-colors duration-200">Join Us</a></li>
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
  );
};

export default Navbar; 