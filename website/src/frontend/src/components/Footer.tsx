import React from 'react';

const socials = [
  { icon: '/images/telegram.png', alt: 'Telegram', link: '#' },
  { icon: '/images/x.png', alt: 'X', link: '#' },
  { icon: '/images/instagram.png', alt: 'Instagram', link: '#' },
  { icon: '/images/LinkedInWhite.png', alt: 'LinkedIn', link: '#' },
];

const Footer = () => (
  <footer className="w-full bg-deepPurple py-12 px-4 text-white font-light" style={{ fontFamily: 'Plus Jakarta Sans' }}>
    <div className="max-w-7xl ml-40 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16">
      {/* Left: Logo, tagline, socials */}
      <div className="flex-1 min-w-[220px] flex flex-col gap-4 items-start">
        <img src="/images/logo.png" alt="ICP Kenya Logo" className="w-32 mb-2" />
        <div className="text-sm mb-2">Empowering Africa's Web3 Future — One Builder at a Time</div>
        <div className="font-semibold text-sm mb-1">Follow Us :</div>
        <div className="flex gap-3 items-center">
          {socials.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center">
              <img src={s.icon} alt={s.alt} className="w-5 h-5 object-contain" />
            </a>
          ))}
        </div>
      </div>
      {/* Center: Navigation and Quick Link */}
      <div className="flex-[2] flex flex-col sm:flex-row gap-12 md:gap-20 justify-center items-center">
        <div>
          <div className="font-semibold text-sm mb-3">Navigation</div>
          <ul className="space-y-2 text-white/90 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#join" className="hover:underline">Join Us</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-sm mb-3">Quick Link</div>
          <ul className="space-y-2 text-white/90 text-sm">
            <li><a href="#" className="hover:underline">Dacade Course</a></li>
            <li><a href="#" className="hover:underline">About ICP</a></li>
            <li><a href="#" className="hover:underline">Hackathons</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
      </div>
      {/* Right: Contact Info */}
      <div className="flex-1 min-w-[220px] flex flex-col gap-4 items-start md:items-start">
        <div className="font-semibold text-sm mb-3">Contact Info</div>
        <div className="flex items-center gap-3 mb-2">
          <img src="/images/mail.png" alt="Mail" className="w-6 h-6" />
          <span className="text-white/90 text-sm">info@icpkushite.com</span>
        </div>
        <div className="flex items-center gap-3">
          <img src="/images/location.png" alt="Location" className="w-6 h-6" />
          <span className="text-white/90 text-sm">Nairobi, Kenya</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 