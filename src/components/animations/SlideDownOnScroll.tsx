import React from 'react';
import { motion } from 'framer-motion';
import { SlideFromLeftProps } from '../../types/animations';

export const SlideDownOnScroll: React.FC<SlideFromLeftProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  distance = 100,
  className = '',
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, y: -distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
