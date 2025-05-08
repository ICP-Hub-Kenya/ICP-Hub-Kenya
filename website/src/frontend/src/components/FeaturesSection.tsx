import React from 'react';
import { motion } from 'framer-motion';
import DeveloperTrainingImg from '/images/DeveloperTraining.png';
import CommunityApproachImg from '/images/CommunityApproach.png';
import GrantOpportunitiesImg from '/images/GrantOpportunities.png';

const features = [
  {
    title: 'Hands-on Developer Training',
    desc: "Learn to build full-stack decentralized applications and AI tools using ICP's unique canister smart contracts.",
    img: DeveloperTrainingImg,
    cta: 'Begin Training',
  },
  {
    title: 'Community-Centric Approach',
    desc: 'We foster a vibrant, inclusive network of developers, educators, designers, and entrepreneurs.',
    img: CommunityApproachImg,
    cta: 'Join Our Community',
  },
  {
    title: 'Access to Grant Opportunities',
    desc: 'Get funded to build your blockchain idea with support from the DFINITY Foundation and partner programs.',
    img: GrantOpportunitiesImg,
    cta: 'Get Started',
  },
];

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

const FeaturesSection = () => (
  <motion.section 
    className="w-full bg-deepPurple py-20 px-4" 
    id="features"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.div 
      className="max-w-6xl mx-auto mb-12 flex flex-col items-start"
      variants={itemVariants}
    >
      <motion.span 
        className="inline-block bg-pinkBadge text-black px-4 py-1 rounded-full font-semibold mb-4"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        Features
      </motion.span>
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-2 text-white"
        variants={itemVariants}
      >
        Why Join ICP Hub Kenya?
      </motion.h2>
    </motion.div>
    <motion.div 
      className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      variants={containerVariants}
    >
      {features.map((f, i) => (
        <motion.div 
          key={i} 
          className="bg-white rounded-2xl p-4 pt-8 md:p-8 md:pt-10 flex flex-col items-start shadow-lg border border-primary/20 relative min-h-[280px] md:min-h-[340px]"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.2 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img 
            src={f.img} 
            alt="" 
            className="absolute top-3 right-4 w-10 h-10 md:top-4 md:right-6 md:w-12 md:h-12 object-contain"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div 
            className="font-bold text-base md:text-lg mb-2 text-deepPurple mt-2 pr-10 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {f.title}
          </motion.div>
          <motion.div 
            className="text-gray-600 text-xs md:text-sm mb-6 md:mb-8 text-left pr-2 md:pr-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {f.desc}
          </motion.div>
          <motion.button 
            onClick={() => {
              window.open("https://t.me/icphub_KE", '_blank');
            }}
            className="bg-magenta text-white px-5 py-2 rounded-lg font-semibold hover:bg-pinkBadge hover:text-black transition w-full md:w-auto md:self-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {f.cta}
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

export default FeaturesSection; 