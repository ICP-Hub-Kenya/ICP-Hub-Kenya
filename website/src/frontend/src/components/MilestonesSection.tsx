import React from 'react';

const milestones = [
  { value: '1,200+', label: 'Developers', desc: 'Big, Talented Blockchain developer community thriving in Kenya.' },
  { value: '$100k+', label: 'Grants Secured', desc: 'Funding innovation through various strategic ICP grants.' },
  { value: '50+', label: 'Partnered Universities', desc: 'Driving Web3 adoption across academic institutions.' },
  { value: '10+', label: 'Startups Incubated', desc: "Tomorrow's biggest blockchain ideas launched with support." },
];

const MilestonesSection = () => (
  <section className="w-full bg-white py-16 px-4" id="milestones">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full font-semibold mb-4">As Featured</span>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-dark">Milestones That Define Us</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">Every number tells a story of growth, innovation, and commitment to excellence in developing the next frontier.</p>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {milestones.map((m, i) => (
        <div key={i} className="bg-white border-2 border-primary rounded-2xl p-8 flex flex-col items-center shadow-lg">
          <div className="text-4xl font-extrabold text-primary mb-2">{m.value}</div>
          <div className="font-bold text-lg mb-1 text-dark">{m.label}</div>
          <div className="text-gray-600 text-sm text-center">{m.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default MilestonesSection; 