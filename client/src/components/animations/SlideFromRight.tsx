import React from 'react';
import { motion } from 'framer-motion';
import { SlideFromRightProps } from '../../types/animations';

export const SlideFromRight: React.FC<SlideFromRightProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  distance = 100,
  className = '',
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, x: distance }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
