import React from 'react';
import { motion } from 'framer-motion';
import { HoverScaleProps } from '../../types/animations';

export const HoverScale: React.FC<HoverScaleProps> = ({
  children,
  scale = 1.05,
  duration = 0.2,
  className = '',
  ...props
}) => (
  <motion.div
    whileHover={{ scale }}
    transition={{ duration }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
