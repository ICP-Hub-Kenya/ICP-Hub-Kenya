import React from 'react';

const features = [
  {
    title: 'Hands-on Developer Training',
    desc: 'Join bootcamps, skill challenges, and hackathons to accelerate your learning.',
    icon: '🧑‍💻',
    cta: 'Begin Training',
  },
  {
    title: 'Community-Centric Approach',
    desc: 'Engage in a vibrant, inclusive community of builders, mentors, and partners.',
    icon: '🤝',
    cta: 'Join our Community',
  },
  {
    title: 'Access to Grant Opportunities',
    desc: 'Get support for your ideas and projects through our grant programs.',
    icon: '💡',
    cta: 'Explore Grants',
  },
];

const FeaturesSection = () => (
  <section className="w-full bg-primaryLight py-20 px-4" id="features">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-semibold mb-4">Features</span>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-dark">Why Join ICP Hub Kenya?</h2>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div key={i} className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-lg border border-primary/20">
          <div className="text-4xl mb-4">{f.icon}</div>
          <div className="font-bold text-lg mb-2 text-primary">{f.title}</div>
          <div className="text-gray-600 text-sm mb-4 text-center">{f.desc}</div>
          <button className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-primaryLight hover:text-primary transition">{f.cta}</button>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection; 