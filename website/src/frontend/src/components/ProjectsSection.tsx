import React from 'react';

const projects = [
  {
    title: 'Fries Coin',
    desc: 'Fries Coin began with a simple yet compelling idea: to unite fries enthusiasts worldwide through a unique cryptocurrency. As fries lovers ourselves, we recognized the need for a community where people could share their love for fries, from recipes to favorite fries spots.',
    img: '/images/projects/Fries.png',
    twitter: 'https://x.com/FriesCoin',
    website: 'https://friescoin.xyz/',
  },
  {
    title: 'Investa farm',
    desc: 'At Investa Farm, we empower farmers by providing easy access to essential financial services. Our platform simplifies the loan application process, allowing you to secure quick and insured loans directly from local agrostores.',
    img: '/images/projects/Investa.png',
    twitter: 'https://x.com/Investa_farm',
    website: 'https://investafarm.com/',
  },
  {
    title: 'IThreeM',
    desc: "I3M aims to become the go-to platform for creating, sharing, and monetizing 3D virtual worlds. Whether you're a developer, a gamer, or a virtual reality enthusiast, I3M offers the tools and ecosystem to bring your digital creations to life.",
    img: '/images/projects/iThreeM.png',
    twitter: 'https://x.com/IThr3M',
    website: 'https://ithreem.com/',
  },
  {
    title: 'Chama DAO',
    desc: 'ChamaDAO is a decentralized platform designed to empower traditional Chama groups with modern blockchain solutions, offering financial growth and stability',
    img: '/images/projects/ChamaDAO.png',
    twitter: 'https://x.com/TheChamaDAO',
    website: 'https://www.thechamadao.xyz/',
  },
];

const socialIcons = {
  twitter: '/images/PinkTwitter.png',
  website: '/images/PinkWebsite.png',
};

const ProjectsSection = () => (
  <section className="w-full bg-white py-20 px-4" id="projects">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="inline-block bg-pinkBadge text-black px-4 py-1 rounded-full font-semibold mb-4">Our Startups</span>
      <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center text-[#43159B]">Projects We Power</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8">A showcase of innovative ventures incubated through ICP Hub Kenya —<br/>solving local and global problems with blockchain and AI</p>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="rounded-2xl p-6 md:p-8 flex flex-col bg-gradient-to-br from-gradientFrom to-gradientTo text-white relative min-h-[260px] shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-start justify-between mb-2">
            <img src={p.img} alt={p.title} className="w-14 h-14 rounded-full object-contain bg-white p-1" />
            <div className="flex gap-2">
              <a href={p.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <img src={socialIcons.twitter} alt="Twitter" className="w-5 h-5" />
              </a>
              <a href={p.website} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <img src={socialIcons.website} alt="Website" className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="font-bold text-xl mb-2 mt-2">{p.title}</div>
          <a 
            href={`mailto:info@icpkushite.com?subject=Introduction Request for ${p.title}`}
            className="ml-auto mb-2 bg-white/10 hover:bg-white/30 text-white px-4 py-1 rounded-lg font-light border border-white hover:border-2 text-sm transition inline-block"
          >
            Get an Intro &rsaquo;
          </a>
          <div className="text-white/90 text-sm leading-relaxed">{p.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection; 