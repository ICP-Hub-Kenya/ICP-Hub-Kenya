import React from 'react';

const projects = [
  {
    title: 'Frites Coin',
    desc: 'A new tokenomics design to supercharge the local economy, enabling peer-to-peer trading and payments for all. Whether you\'re a merchant or a consumer, Frites Coin is building the future of digital value.',
    tags: ['Tokenomics', 'Payments'],
  },
  {
    title: 'Investa farm',
    desc: 'A platform empowering farmers to access decentralized finance and manage their agricultural investments with transparency and security.',
    tags: ['DeFi', 'Agriculture'],
  },
  {
    title: 'Chama DAO',
    desc: 'ChamaDAO is a collective investment platform for community groups, enabling pooled savings and investments on the blockchain, offering financial inclusion for all.',
    tags: ['DAO', 'Community'],
  },
];

const ProjectsSection = () => (
  <section className="w-full bg-primaryLight py-20 px-4" id="projects">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-semibold mb-4">Our Impact</span>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-dark">Projects We Power</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">A showcase of innovative ventures initiated and enabled through ICP Hub Kenya — spotlighting local and global excellence in Web3 tech and social good.</p>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="bg-white rounded-2xl p-8 flex flex-col shadow-lg border border-primary/20">
          <div className="font-bold text-lg mb-2 text-primary">{p.title}</div>
          <div className="text-gray-600 text-sm mb-4">{p.desc}</div>
          <div className="flex gap-2 flex-wrap">
            {p.tags.map((tag, j) => (
              <span key={j} className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection; 