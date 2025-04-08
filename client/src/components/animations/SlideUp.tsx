import React from 'react';
import { motion } from 'framer-motion';
import { SlideUpProps } from '../../types/animations';

export const SlideUp: React.FC<SlideUpProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 50,
  className = '',
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
