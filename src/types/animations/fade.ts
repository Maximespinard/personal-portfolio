import { BaseAnimationProps, BaseSpanAnimationProps } from './base';

export interface FadeInProps extends Omit<BaseAnimationProps, 'animate'> {}

export interface FadeInOnScrollProps
  extends Omit<BaseAnimationProps, 'whileInView' | 'viewport'> {
  // Any additional fade-in-on-scroll specific props would go here
}

export interface FadeInSpanProps
  extends Omit<BaseSpanAnimationProps, 'animate'> {
  // Any additional fade-in-span specific props would go here
}
