import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Grant Application',
    desc: 'Our grant services are designed to provide the financial support and resources needed to turn your groundbreaking ideas into reality.',
    img: '/images/grant.png',
  },
  {
    title: 'ICP Education',
    desc: 'Our educational programs are designed to empower individuals and organizations with the expertise needed to navigate the blockchain and ICP ecosystem.',
    img: '/images/education.png',
  },
  {
    title: 'Innovation Incubator',
    desc: 'Our Incubator Program is at the heart of our mission to inspire creativity and drive progress within the blockchain and Internet Computer community.',
    img: '/images/innovator.png',
  },
];

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);

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

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section 
      id="about" 
      className="w-full bg-[#FCEBFF] py-20 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left: Badge, Heading, Image/Video */}
        <motion.div 
          className="flex-1 flex flex-col items-start"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-block bg-pinkBadge text-black px-4 py-1 rounded-md font-semibold mb-4 text-sm"
            variants={itemVariants}
          >
            About Us
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6" 
            style={{
              background: 'linear-gradient(90deg, #192F70 0%, #192F70 20%, #2667C5 40%, #5E54B6 70%, #C53AA2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            variants={itemVariants}
          >
            We provide easy medium to get started in your tech journey
          </motion.h2>
          <motion.div 
            className="relative w-full max-w-md rounded-2xl overflow-hidden mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {!showVideo ? (
              <div className="relative">
                <img
                  src="/images/AboutImage.png"
                  alt="About ICP Hub Kenya"
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => setShowVideo(true)}
                />
              </div>
            ) : (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/mqLoCgpDotI?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            )}
          </motion.div>
        </motion.div>
        {/* Right: Description & Features */}
        <motion.div 
          className="flex-1 flex flex-col gap-6 shadow-lg rounded-xl bg-white/70 p-6"
          variants={itemVariants}
        >
          <motion.p 
            className="text-base text-gray-700 font-light mb-6" 
            style={{fontFamily: 'Plus Jakarta Sans'}}
            variants={itemVariants}
          >
            Our grant services are designed to provide the financial support, education, and mentorship you need to thrive in the blockchain space.
          </motion.p>
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                className="flex flex-row items-start gap-4 rounded-xl p-4"
                variants={featureVariants}
                custom={i}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-28 h-12 flex items-center justify-center rounded-md bg-pinkBadge p-2"
                  transition={{ duration: 0.5 }}
                >
                  <img src={f.img} alt={f.title} className="w-8 h-8 object-contain" />
                </motion.div>
                <div>
                  <h3 className="text-black font-semibold text-lg mb-1" style={{fontWeight: 600}}>{f.title}</h3>
                  <p className="text-gray-700 text-sm font-light" style={{fontFamily: 'Plus Jakarta Sans'}}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection; 