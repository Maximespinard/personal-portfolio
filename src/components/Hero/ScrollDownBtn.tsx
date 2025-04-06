import React from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../../utils/functions';

interface ScrollDownButtonProps {
  className?: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  className = '',
}) => {
  const handleScroll = () => {
    scrollToSection('intro-showcase-section');
  };

  // Animation for the bouncing arrow
  const bounceAnimation = {
    y: [0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut',
    },
  };

  return (
    <div className={`flex justify-center ${className} `}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <button
          onClick={handleScroll}
          className="relative bg-gradient-to-r from-[#38126d] to-[#251043] border-2 border-[#38126d]/70 hover:border-[#7127ba]/90 rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-[#7127ba]/30 transition-all duration-300 focus:outline-none group overflow-hidden"
          aria-label="Scroll down to showcase section"
        >
          <div className="absolute inset-0 bg-gradient-radial from-[#7127ba]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div animate={bounceAnimation} className="relative z-10">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
};

export default ScrollDownButton;
