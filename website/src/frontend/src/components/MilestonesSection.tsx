import React from 'react';

const milestones = [
  {
    value: '1,200+',
    label: 'Developers Trained',
    desc: "Building Africa's blockchain talent through immersive training.",
    img: '/images/devstrained.png',
    dark: true,
  },
  {
    value: '$100k+',
    label: 'Grants Secured',
    desc: 'Funding innovative startups through strategic ICP grants.',
    img: '/images/grants.png',
    dark: false,
  },
  {
    value: '50+',
    label: 'Partnered Universities',
    desc: 'Driving Web3 education across Kenyan higher institutions.',
    img: '/images/universities.png',
    dark: true,
  },
  {
    value: '10+',
    label: 'Startups Incubated',
    desc: 'Empowering local founders with decentralized launch support.',
    img: '/images/startups.png',
    dark: false,
  },
];

const MilestonesSection = () => (
  <section className="relative w-full h-screen bg-purpleCustom py-16 px-4" id="milestones">
    <img
      src="/images/MilestoneSideImage.png"
      alt=""
      className="absolute left-0 -top-16 md:-top-24 z-10 pointer-events-none select-none"
      style={{ width: '150px', height: 'auto' }}
    />
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="inline-block bg-pinkBadge text-black px-4 py-1 rounded-md font-semibold mb-12 text-sm">Achievement</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{
            background: 'linear-gradient(90deg, #192F70 0%, #192F70 20%, #2667C5 40%, #5E54B6 70%, #C53AA2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            Milestones That Define Us
          </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-16">Every number tells a story of growth, innovation, and a commitment to decentralized progress in Africa</p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
      {milestones.map((m, i) => {
        // Cards 1 & 3: number left, content right; Cards 2 & 4: number right, content left
        const isReverse = i % 2 === 1;
        const cardStyle = m.dark ? { backgroundColor: '#43159B' } : {};
        return (
          <div
            key={i}
            className={`rounded-2xl px-6 py-8 ${m.dark ? 'text-white' : 'bg-white text-black'} flex-1 flex flex-col justify-between items-stretch gap-x-8`}
            style={cardStyle}
          >
            {/* Number Section */}
            <div className={`text-4xl font-extrabold ${m.dark ? 'text-white' : 'text-[#43159B]'} text-left`}>{m.value}</div>
            {/* Image and Text Section */}
            <div className="flex flex-col items-end">
              <img src={m.img} alt={m.label} className="w-14 h-14 mb-4 object-contain" />
              <div className={`font-semibold text-lg mb-1 ${m.dark ? 'text-white' : 'text-black'} text-right`}>{m.label}</div>
              <div className={`text-sm ${m.dark ? 'text-white/80' : 'text-gray-700'} text-right`}>{m.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default MilestonesSection; 