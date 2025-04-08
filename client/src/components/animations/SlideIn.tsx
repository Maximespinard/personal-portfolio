import React from 'react';
import { motion } from 'framer-motion';
import { SlideInProps } from '../../types/animations';

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  x = 50,
  className = '',
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, x }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
