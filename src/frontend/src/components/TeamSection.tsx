import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { 
    name: 'Tevin Isaac', 
    role: 'Developer Relations', 
    img: '/images/team/tevin.png', 
    socials: {
      linkedin: 'https://www.linkedin.com/in/tevin-isaac/',
      twitter: 'https://x.com/isaactevin'
    }
  },
  { 
    name: 'Yvonne Kagondu', 
    role: 'Founder', 
    img: '/images/team/yvonne.png', 
    socials: {
      linkedin: 'https://www.linkedin.com/in/yvonne-kagondu/',
      twitter: 'https://x.com/kagondu_yvonne'
    }
  },
  { 
    name: 'Steve Kimoi', 
    role: 'Developer Relations', 
    img: '/images/team/steve.png', 
    socials: {
      linkedin: 'https://www.linkedin.com/in/stephen-kimoi/',
      twitter: 'https://x.com/stevekimoi'
    }
  },
  { 
    name: 'Sammy Fash', 
    role: 'Lead Designer', 
    img: '/images/team/sammy.png', 
    socials: {
      linkedin: '#',
      twitter: 'https://x.com/sammyyfash'
    }
  },
  { 
    name: 'Peace Adekoya', 
    role: 'Social Media Manager', 
    img: '/images/team/orlah.png', 
    socials: {
      linkedin: '#',
      twitter: '#'
    }
  },
  { 
    name: 'Osezua Silas', 
    role: 'Community Strategist', 
    img: '/images/team/silas.png', 
    socials: {
      linkedin: 'https://www.linkedin.com/in/silas-osezua-254327167/',
      twitter: 'https://x.com/mickssp'
    }
  },
  { name: 
    'Bella Chris', 
    role: 'Community Manager', 
    img: '/images/team/bellah.png', 
    socials: {
      linkedin: '#',
      twitter: '#'
    }
  },
  { 
    name: 'Charles Maina', 
    role: 'Technical Writer', 
    img: '/images/team/charles.png', 
    socials: {
      linkedin: 'https://www.linkedin.com/in/charlez-maina',
      twitter: '#'
    }
  },
];

const socialIcons: Record<'linkedin' | 'twitter', string> = {
  linkedin: '/images/linkedin.png',
  twitter: '/images/twitter.png',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const TeamSection = () => (
  <motion.section 
    className="w-full bg-purpleCustom py-20 px-4" 
    id="team"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.div 
      className="max-w-6xl mx-auto flex flex-col items-center mb-12"
      variants={itemVariants}
    >
      <motion.span 
        className="inline-block bg-pinkBadge text-black px-6 py-2 rounded-full font-semibold mb-4 text-base text-center"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        Our Team
      </motion.span>
      <motion.h2 
        className="text-2xl md:text-4xl font-bold mb-2 text-center" 
        style={{
          background: 'linear-gradient(90deg, #2B007D 0%, #D606CE 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
        variants={itemVariants}
      >
        Meet the <span className="font-extrabold">Visionaries Driving the Future</span>
      </motion.h2>
    </motion.div>
    <motion.div 
      className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      variants={containerVariants}
    >
      {team.map((member, i) => (
        <motion.div 
          key={i} 
          className="bg-white rounded-2xl flex flex-col items-center shadow-lg border border-[#F5A7FF] min-h-[340px] p-0 overflow-hidden"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img 
            src={member.img} 
            alt={member.name} 
            className="w-full h-56 object-cover object-top mb-0 rounded-b-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="flex gap-2 mb-3 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {Object.entries(member.socials).map(([platform, url]) => (
              url !== '#' && (
                <motion.a 
                  key={platform} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2B007D] transition-all duration-200 hover:bg-[#D606CE]"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={socialIcons[platform as keyof typeof socialIcons]} alt={platform} className="w-4 h-4" />
                </motion.a>
              )
            ))}
          </motion.div>
          <motion.div 
            className="font-bold text-lg text-deepPurple mb-1 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {member.name}
          </motion.div>
          <motion.div 
            className="text-gray-500 text-xs font-semibold mb-3 text-center tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {member.role.toUpperCase()}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

export default TeamSection; 