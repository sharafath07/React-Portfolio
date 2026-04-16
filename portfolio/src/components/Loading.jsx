import React from 'react';
import { motion } from 'motion/react';

const Loader = () => {
  const letters = ['', 'S', 'H', 'A', 'R', 'A', 'F', 'A', 'T', 'H', ''];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="flex justify-center items-center h-screen bg-black fixed inset-0 z-50"
    >
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          exit={{ y: 800 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.15 * index
          }}
          className="bg-gray-800 flex-1 text-[#cc2bfb] h-screen text-4xl md:text-6xl lg:text-8xl flex justify-center items-center audiowide"
        >
          <motion.span
            animate={{
              color: ['#cc2bfb', '#ffffff', '#cc2bfb'],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 0.8,
              delay: 0.3 * index,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            {letter}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Loader;