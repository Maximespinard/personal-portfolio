import { ReactNode } from 'react';
import { HTMLMotionProps } from 'framer-motion';

/**
 * Base props interface for animation components that use div elements
 */
export interface BaseAnimationProps
  extends Omit<HTMLMotionProps<'div'>, 'initial' | 'transition'> {
  /** React children to be rendered inside the animated component */
  children: ReactNode;
  /** Delay before animation starts in seconds */
  delay?: number;
  /** Duration of animation in seconds */
  duration?: number;
  /** CSS class names to apply to the component */
  className?: string;
}

/**
 * Base props interface for animation components that use span elements
 */
export interface BaseSpanAnimationProps
  extends Omit<HTMLMotionProps<'span'>, 'initial' | 'transition'> {
  /** React children to be rendered inside the animated component */
  children: ReactNode;
  /** Delay before animation starts in seconds */
  delay?: number;
  /** Duration of animation in seconds */
  duration?: number;
  /** CSS class names to apply to the component */
  className?: string;
}
