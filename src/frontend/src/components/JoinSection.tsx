import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/gallery/gallery1.png',
  '/images/gallery/gallery2.png',
  '/images/gallery/gallery3.jpeg',
  '/images/gallery/gallery4.jpg',
  '/images/gallery/gallery5.jpg',
  '/images/gallery/gallery6.jpg',
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

const JoinSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleImages = [images[current % images.length], images[(current + 1) % images.length]];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (images.length / 2));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      className="w-full py-16 px-2 md:px-0 flex justify-center items-center" 
      id="join"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className="w-full max-w-5xl rounded-3xl relative flex flex-col items-center justify-center overflow-hidden" 
        style={{ minHeight: 600 }}
        variants={itemVariants}
      >
        {/* Centered background image */}
        <motion.img 
          src="/images/HeroBackground.png" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center w-full h-full py-12 px-4"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-white text-center"
            variants={itemVariants}
          >
            Join the Movement
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg mb-8 max-w-2xl text-center text-white/90"
            variants={itemVariants}
          >
            Stay updated on events, grants, bootcamps, and ecosystem news. Be part of Africa's most exciting Web3 community.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8 justify-center w-full"
            variants={itemVariants}
          >
            <motion.a 
              href="#join" 
              className="bg-pinkBadge text-black font-semibold px-8 py-3 rounded-lg shadow hover:bg-[#e47be6] transition text-base text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join The community
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-white text-black font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition text-base text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
          {/* Gallery scroll */}
          <motion.div 
            className="flex justify-center items-center mb-6 w-full"
            variants={itemVariants}
          >
            <div className="flex gap-6">
              <AnimatePresence mode="wait">
                {visibleImages.map((img, idx) => (
                  <motion.img 
                    key={`${img}-${idx}`}
                    src={img} 
                    alt="Gallery" 
                    className="w-80 h-56 object-cover rounded-xl shadow-lg bg-white"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
          {/* Dots */}
          <motion.div 
            className="flex gap-2 justify-center"
            variants={itemVariants}
          >
            {Array.from({ length: images.length / 2 }).map((_, i) => (
              <motion.span 
                key={i} 
                className={`w-3 h-3 rounded-full border-2 border-white ${i === current % (images.length / 2) ? 'bg-white' : 'bg-white/30'} inline-block transition-colors duration-300`}
                whileHover={{ scale: 1.2 }}
                animate={i === current % (images.length / 2) ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default JoinSection; 