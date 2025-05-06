import React, { ReactNode } from 'react';
import { MotionDiv, MotionSpan } from './MotionElement';

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
  <MotionDiv
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </MotionDiv>
);

export const FadeInOnScroll: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}) => (
  <MotionDiv
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </MotionDiv>
);

export const SlideUp: React.FC<SlideProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 50,
  className = '',
  ...props
}) => (
  <MotionDiv
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </MotionDiv>
);

export const SlideUpOnScroll: React.FC<SlideProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 50,
  className = '',
  ...props
}) => (
  <MotionDiv
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </MotionDiv>
);

export const SlideDownOnScroll: React.FC<SlideProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 50,
  className = '',
  ...props
}) => (
  <MotionDiv
    initial={{ opacity: 0, y: -y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </MotionDiv>
);

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  x = 50,
  className = '',
  ...props
}) => (
  <MotionDiv
    initial={{ opacity: 0, x }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </MotionDiv>
);

export const HoverScale: React.FC<HoverProps> = ({
  children,
  scale = 1.05,
  duration = 0.2,
  className = '',
  ...props
}) => (
  <MotionDiv
    whileHover={{ scale }}
    transition={{ duration }}
    className={className}
    {...props}
  >
    {children}
  </MotionDiv>
);

export const FadeInSpan: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}) => (
  <MotionSpan
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
    className={className}
    {...props}
  >
    {children}
  </MotionSpan>
);
