// src/components/animations/AnimationWrapper.tsx
import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-in'
  | 'slide-from-left'
  | 'slide-from-right'
  | 'slide-up-on-scroll'
  | 'hover-scale';

interface AnimationProps
  extends Omit<
    HTMLMotionProps<'div'>,
    | 'initial'
    | 'animate'
    | 'whileHover'
    | 'whileInView'
    | 'transition'
    | 'viewport'
  > {
  children: ReactNode;
  type: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  scale?: number;
  y?: number;
  x?: number;
}

const getAnimationProps = (
  type: AnimationType,
  options: {
    distance?: number;
    scale?: number;
    y?: number;
    x?: number;
  }
) => {
  const { distance = 100, scale = 1.05, y = 50, x = 50 } = options;

  switch (type) {
    case 'fade-in':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      };
    case 'slide-up':
      return {
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
      };
    case 'slide-in':
      return {
        initial: { opacity: 0, x },
        animate: { opacity: 1, x: 0 },
      };
    case 'slide-from-left':
      return {
        initial: { opacity: 0, x: -distance },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: '-100px' },
      };
    case 'slide-from-right':
      return {
        initial: { opacity: 0, x: distance },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: '-100px' },
      };
    case 'slide-up-on-scroll':
      return {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-100px' },
      };
    case 'hover-scale':
      return {
        whileHover: { scale },
      };
    default:
      return {};
  }
};

export const AnimationWrapper: React.FC<AnimationProps> = ({
  children,
  type,
  delay = 0,
  duration = 0.5,
  className = '',
  distance,
  scale,
  y,
  x,
  ...props
}) => {
  const animationProps = getAnimationProps(type, { distance, scale, y, x });

  return (
    <motion.div
      {...animationProps}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Convenience components for backward compatibility
export const FadeIn: React.FC<Omit<AnimationProps, 'type'>> = (props) => (
  <AnimationWrapper type="fade-in" {...props} />
);

export const SlideUp: React.FC<Omit<AnimationProps, 'type'>> = (props) => (
  <AnimationWrapper type="slide-up" {...props} />
);

export const SlideIn: React.FC<Omit<AnimationProps, 'type'>> = (props) => (
  <AnimationWrapper type="slide-in" {...props} />
);

export const SlideFromLeft: React.FC<Omit<AnimationProps, 'type'>> = (
  props
) => <AnimationWrapper type="slide-from-left" {...props} />;

export const SlideFromRight: React.FC<Omit<AnimationProps, 'type'>> = (
  props
) => <AnimationWrapper type="slide-from-right" {...props} />;

export const SlideUpOnScroll: React.FC<Omit<AnimationProps, 'type'>> = (
  props
) => <AnimationWrapper type="slide-up-on-scroll" {...props} />;

export const HoverScale: React.FC<Omit<AnimationProps, 'type'>> = (props) => (
  <AnimationWrapper type="hover-scale" {...props} />
);

// Span version for FadeInSpan
export const FadeInSpan: React.FC<Omit<AnimationProps, 'type'>> = ({
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
