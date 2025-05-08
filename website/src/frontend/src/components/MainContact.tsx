import React from 'react';

const contactInfo = [
  {
    icon: '/images/contact/mail.png',
    alt: 'Email',
    text: 'info@icpkushite.com',
  },
  {
    icon: '/images/contact/telephone.png',
    alt: 'Phone',
    text: '+123 456 789',
  },
  {
    icon: '/images/contact/location.png',
    alt: 'Location',
    text: 'Nairobi, Kenya',
  },
];

const MainContact = () => (
  <section className="w-full py-16 px-4 bg-white font-light" style={{ fontFamily: 'Plus Jakarta Sans' }}>
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2" style={{
        background: 'linear-gradient(90deg, #192F70 0%, #C53AA2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}>
        Contact <span className="text-[#D606CE]">Us</span>
      </h1>
      <p className="text-center text-black mb-10 max-w-2xl" style={{ fontFamily: 'Plus Jakarta Sans' }}>
        At the forefront of technology is ICP Hub Kenya dedicated to advancing the Internet Computer ecosystem.
      </p>
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-12">
          {contactInfo.map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-black text-base">
              <img src={item.icon} alt={item.alt} className="w-6 h-6" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        {/* Right: Contact Form */}
        <form className="flex-1 flex flex-col gap-8">
          <input type="text" placeholder="Your name" className="border-0 border-b-2 border-pinkBadge focus:border-pinkBadge focus:ring-0 outline-none py-2 px-1 bg-transparent text-black placeholder:text-black/60" />
          <input type="email" placeholder="Your email" className="border-0 border-b-2 border-pinkBadge focus:border-pinkBadge focus:ring-0 outline-none py-2 px-1 bg-transparent text-black placeholder:text-black/60" />
          <textarea placeholder="Your message" rows={3} className="border-0 border-b-2 border-pinkBadge focus:border-pinkBadge focus:ring-0 outline-none py-2 px-1 bg-transparent text-black placeholder:text-black/60 resize-none" />
          <button type="submit" className="mt-4 flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-deepPurple transition">
            <img src="/images/contact/telegram.png" alt="Send" className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default MainContact; 