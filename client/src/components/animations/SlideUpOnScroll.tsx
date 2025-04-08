import React from 'react';
import { motion } from 'framer-motion';
import { SlideUpOnScrollProps } from '../../types/animations';

export const SlideUpOnScroll: React.FC<SlideUpOnScrollProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 50,
  className = '',
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
