import React from 'react';
import { motion } from 'framer-motion';
import { FadeInSpanProps } from '../../types/animations';

export const FadeInSpan: React.FC<FadeInSpanProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.span>
);
