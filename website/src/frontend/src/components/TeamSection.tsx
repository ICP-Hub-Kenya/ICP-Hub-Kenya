import React from 'react';

const team = [
  { name: 'Tevin Isaac', role: 'Developer Relations', img: '/images/team/tevin.png', socials: ['linkedin', 'twitter'] },
  { name: 'Yvonne Kagondu', role: 'Co-Founder', img: '/images/team/yvonne.png', socials: ['linkedin', 'twitter'] },
  { name: 'Steve Kimoi', role: 'Developer Relations', img: '/images/team/steve.png', socials: ['linkedin', 'twitter'] },
  { name: 'Sammy Fash', role: 'Lead Designer', img: '/images/team/sammy.png', socials: ['linkedin', 'twitter'] },
  { name: 'Peace Adekoya', role: 'Social Media Manager', img: '/images/team/orlah.png', socials: ['linkedin', 'twitter'] },
  { name: 'Osezua Silas', role: 'Community Strategist', img: '/images/team/silas.png', socials: ['linkedin', 'twitter'] },
  { name: 'Bella Chris', role: 'Community Manager', img: '/images/team/bellah.png', socials: ['linkedin', 'twitter'] },
  { name: 'Charles Maina', role: 'Technical Writer', img: '/images/team/charles.png', socials: ['linkedin', 'twitter'] },
];

const socialIcons: Record<'linkedin' | 'twitter', string> = {
  linkedin: '/images/linkedin.png',
  twitter: '/images/twitter.png',
};

const TeamSection = () => (
  <section className="w-full bg-white py-20 px-4" id="team">
    <div className="max-w-6xl mx-auto flex flex-col items-center mb-12">
      <span className="inline-block bg-[#F5A7FF] text-black px-6 py-2 rounded-full font-semibold mb-4 text-base text-center">Our Team</span>
      <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center" style={{
        background: 'linear-gradient(90deg, #2B007D 0%, #D606CE 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}>
        Meet the <span className="font-extrabold">Visionaries Driving the Future</span>
      </h2>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {team.map((member, i) => (
        <div key={i} className="bg-white rounded-2xl flex flex-col items-center shadow-lg border border-[#F5A7FF] min-h-[340px] p-0 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
          <img src={member.img} alt={member.name} className="w-full h-56 object-cover object-top mb-0 rounded-b-2xl" />
          <div className="flex gap-2 mb-3 mt-4">
            {member.socials.map((s, j) => (
              <a key={j} href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2B007D] transition-all duration-200 hover:bg-[#D606CE] hover:scale-110">
                <img src={socialIcons[s as keyof typeof socialIcons]} alt={s} className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="font-bold text-lg text-deepPurple mb-1 text-center">{member.name}</div>
          <div className="text-gray-500 text-xs font-semibold mb-3 text-center tracking-wide">{member.role.toUpperCase()}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection; 