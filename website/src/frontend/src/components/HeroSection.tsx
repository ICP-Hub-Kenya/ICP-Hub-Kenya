import React from 'react';

const HeroSection = () => (
  <header className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-purple-500 to-blue-500 text-white overflow-hidden">
    {/* Navigation */}
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-10">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="ICP Kenya Logo" className="h-8 w-auto" />
        <span className="font-bold text-lg tracking-wide">ICP Kenya</span>
      </div>
      <ul className="hidden md:flex gap-8 font-medium">
        <li><a href="#about" className="hover:text-badge transition">About</a></li>
        <li><a href="#education" className="hover:text-badge transition">Education</a></li>
        <li><a href="#hire" className="hover:text-badge transition">Hire Us</a></li>
        <li><a href="#shop" className="hover:text-badge transition">Shop</a></li>
        <li><a href="#events" className="hover:text-badge transition">Events</a></li>
        <li><a href="#blog" className="hover:text-badge transition">Blog</a></li>
        <li><a href="#join" className="hover:text-badge transition">Join Us</a></li>
      </ul>
      <a href="#get-started" className="bg-gradient-to-r from-pink-500 to-primary px-5 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">Get Started</a>
    </nav>
    {/* Hero Content */}
    <div className="flex flex-col items-center justify-center text-center mt-24 md:mt-32 z-10">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Revolutionizing Blockchain<br />Education with ICP</h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">At the forefront of technology is ICP Hub Kenya dedicated to advancing the Internet Computer ecosystem.</p>
      <div className="flex gap-4 justify-center">
        <a href="#join" className="bg-badge text-dark font-bold px-6 py-3 rounded-lg shadow hover:bg-primary hover:text-white transition">Join the Community</a>
        <a href="#about" className="bg-white/10 border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition">See More</a>
      </div>
    </div>
    {/* Mascot/Logo Illustration */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-96 z-0 opacity-90">
      <img src="/mascot-placeholder.png" alt="ICP Mascot" className="w-full h-auto" />
    </div>
    {/* Decorative tape */}
    <div className="absolute bottom-24 left-0 w-full flex justify-center z-10">
      <div className="bg-white text-primary font-bold px-8 py-2 rounded-full border-4 border-primary shadow-lg">INTERNET COMPUTER KENYA HUB</div>
    </div>
    {/* Gradient overlays for effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
  </header>
);

export default HeroSection; 