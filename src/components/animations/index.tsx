import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

interface SlideProps extends AnimationProps {
  y?: number;
}

interface SlideInProps extends AnimationProps {
  x?: number;
}

interface HoverProps extends AnimationProps {
  scale?: number;
}

export const FadeIn: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInOnScroll: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideUp: React.FC<SlideProps> = ({
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

export const SlideUpOnScroll: React.FC<SlideProps> = ({
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

export const HoverScale: React.FC<HoverProps> = ({
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

export const FadeInSpan: React.FC<AnimationProps> = ({
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
