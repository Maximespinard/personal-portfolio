import React, { ReactNode, lazy, Suspense } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

// Define animation types
type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-in'
  | 'slide-from-left'
  | 'slide-from-right'
  | 'slide-up-on-scroll'
  | 'hover-scale';

// Define animation props interface
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
// Properly typed lazy loading of motion components
const LazyMotionDiv = lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.motion.div }))
);

const LazyMotionSpan = lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.motion.span }))
);

// Animation props generator
const getAnimationProps = (
  type: AnimationType,
  options: {
    distance?: number;
    scale?: number;
    y?: number;
    x?: number;
  }
): Record<string, unknown> => {
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

// Main animation wrapper component
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
    <Suspense fallback={<div className={className}>{children}</div>}>
      <LazyMotionDiv
        {...animationProps}
        transition={{ duration, delay }}
        className={className}
        {...props}
      >
        {children}
      </LazyMotionDiv>
    </Suspense>
  );
};

// Convenience component exports with proper TypeScript typing
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

export const FadeInSpan: React.FC<Omit<AnimationProps, 'type'>> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}) => {
  return (
    <Suspense fallback={<span className={className}>{children}</span>}>
      <LazyMotionSpan
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay }}
        className={className}
        {...props}
      >
        {children}
      </LazyMotionSpan>
    </Suspense>
  );
};
