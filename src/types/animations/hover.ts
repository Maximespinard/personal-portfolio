// TODO: check if needed style
import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

export interface HoverScaleProps
  extends Omit<HTMLMotionProps<'div'>, 'whileHover' | 'transition'> {
  children: ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}
