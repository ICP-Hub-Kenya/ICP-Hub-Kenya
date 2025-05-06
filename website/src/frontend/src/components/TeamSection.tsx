import React from 'react';

const team = [
  { name: 'Tevin Isaac', role: 'Developer Relations', img: '/team1.jpg', socials: ['twitter', 'linkedin'] },
  { name: 'Yvonne Kagendu', role: 'Co-Founder', img: '/team2.jpg', socials: ['twitter', 'linkedin'] },
  { name: 'Steve Kimoi', role: 'Lead Developer', img: '/team3.jpg', socials: ['twitter', 'linkedin'] },
  { name: 'Sammy Fach', role: 'Lead Designer', img: '/team4.jpg', socials: ['twitter', 'linkedin'] },
  { name: 'Peace Adeokyo', role: 'Social Media Manager', img: '/team5.jpg', socials: ['twitter', 'linkedin'] },
  { name: 'Ozezu Silas', role: 'Community Strategist', img: '/team6.jpg', socials: ['twitter', 'linkedin'] },
  { name: 'Bella Chris', role: 'Blockchain Dev', img: '/team7.jpg', socials: ['twitter', 'linkedin'] },
  { name: 'Charles Maina', role: 'Technical Writer', img: '/team8.jpg', socials: ['twitter', 'linkedin'] },
];

const TeamSection = () => (
  <section className="w-full bg-white py-20 px-4" id="team">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full font-semibold mb-4">Our Team</span>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-dark">Meet the Visionaries Driving the Future</h2>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {team.map((member, i) => (
        <div key={i} className="bg-primaryLight rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow" />
          <div className="font-bold text-lg text-primary mb-1">{member.name}</div>
          <div className="text-gray-700 text-sm mb-2">{member.role}</div>
          <div className="flex gap-3">
            {member.socials.map((s, j) => (
              <a key={j} href="#" className="text-primary hover:text-badge text-xl">
                <i className={`fab fa-${s}`}></i>
                {/* Replace with actual icon components or SVGs */}
                <span className="sr-only">{s}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection; 