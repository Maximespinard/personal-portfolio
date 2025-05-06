import React, { lazy, Suspense, isValidElement } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

const LazyMotionDiv = lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.motion.div }))
);
const LazyMotionSpan = lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.motion.span }))
);
const LazyMotionButton = lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.motion.button }))
);

export const MotionDiv: React.FC<HTMLMotionProps<'div'>> = (props) => (
  <Suspense
    fallback={
      <div>{isValidElement(props.children) ? props.children : null}</div>
    }
  >
    <LazyMotionDiv {...props} />
  </Suspense>
);

export const MotionSpan: React.FC<HTMLMotionProps<'span'>> = (props) => (
  <Suspense
    fallback={
      <span>{isValidElement(props.children) ? props.children : null}</span>
    }
  >
    <LazyMotionSpan {...props} />
  </Suspense>
);
export const MotionButton: React.FC<HTMLMotionProps<'button'>> = (props) => (
  <Suspense
    fallback={
      <button>{isValidElement(props.children) ? props.children : null}</button>
    }
  >
    <LazyMotionButton {...props} />
  </Suspense>
);
