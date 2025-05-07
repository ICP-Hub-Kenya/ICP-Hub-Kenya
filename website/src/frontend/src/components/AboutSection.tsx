import React, { useState } from 'react';

const features = [
  {
    title: 'Grant Application',
    desc: 'Our grant services are designed to provide the financial support and resources needed to turn your groundbreaking ideas into reality.',
    img: '/images/grant.png',
  },
  {
    title: 'ICP Education',
    desc: 'Our educational programs are designed to empower individuals and organizations with the expertise needed to navigate the blockchain and ICP ecosystem.',
    img: '/images/education.png',
  },
  {
    title: 'Innovation Incubator',
    desc: 'Our Incubator Program is at the heart of our mission to inspire creativity and drive progress within the blockchain and Internet Computer community.',
    img: '/images/innovator.png',
  },
];

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="about" className="w-full bg-[#FCEBFF] py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left: Badge, Heading, Image/Video */}
        <div className="flex-1 flex flex-col items-start">
          <span className="inline-block bg-pinkBadge text-black px-4 py-1 rounded-md font-semibold mb-4 text-sm">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{
            background: 'linear-gradient(90deg, #192F70 0%, #192F70 20%, #2667C5 40%, #5E54B6 70%, #C53AA2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            We provide easy medium to get started in your tech journey
          </h2>
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden mb-4">
            {!showVideo ? (
              <div className="relative">
                <img
                  src="/images/AboutImage.png"
                  alt="About ICP Hub Kenya"
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => setShowVideo(true)}
                />
              </div>
            ) : (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/mqLoCgpDotI?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            )}
          </div>
        </div>
        {/* Right: Description & Features */}
        <div className="flex-1 flex flex-col gap-6 shadow-lg rounded-xl bg-white/70 p-6">
          <p className="text-base text-gray-700 font-light mb-6" style={{fontFamily: 'Plus Jakarta Sans'}}>Our grant services are designed to provide the financial support, education, and mentorship you need to thrive in the blockchain space.</p>
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex flex-row items-start gap-4 rounded-xl p-4">
                <div className="w-28 h-12 flex items-center justify-center rounded-md bg-pinkBadge p-2">
                  <img src={f.img} alt={f.title} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-black font-semibold text-lg mb-1" style={{fontWeight: 600}}>{f.title}</h3>
                  <p className="text-gray-700 text-sm font-light" style={{fontFamily: 'Plus Jakarta Sans'}}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 