import React from 'react';

const features = [
  {
    title: 'Grant Application',
    desc: 'Get support for your blockchain ideas through our grant program.',
    icon: '💸',
  },
  {
    title: 'ICP Education',
    desc: 'Access workshops and resources to grow your skills on the Internet Computer.',
    icon: '🎓',
  },
  {
    title: 'Innovation Incubator',
    desc: 'Turn your ideas into reality with mentorship and technical support.',
    icon: '🚀',
  },
];

const AboutSection = () => (
  <section id="about" className="w-full bg-white py-20 px-4 md:px-0">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left: Video/Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-80 h-56 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-lg">
          <img src="/about-video-placeholder.jpg" alt="About ICP Hub Kenya" className="w-full h-full object-cover" />
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/80 rounded-full p-4 shadow-lg text-3xl text-primary">▶</span>
          </button>
        </div>
      </div>
      {/* Right: Text & Features */}
      <div className="flex-1">
        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-semibold mb-4">About Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">We provide easy medium to get started in your tech journey</h2>
        <p className="text-lg text-gray-700 mb-8">Our grant services are designed to provide the financial support, education, and mentorship you need to thrive in the blockchain space.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-primaryLight rounded-xl p-6 flex flex-col items-center text-center shadow">
              <div className="text-4xl mb-2">{f.icon}</div>
              <h3 className="font-bold text-lg mb-1 text-primary">{f.title}</h3>
              <p className="text-gray-700 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 