import { BaseAnimationProps } from './base';

export interface BaseSlideProps extends BaseAnimationProps {
  distance?: number;
}

export interface SlideUpProps extends Omit<BaseSlideProps, 'animate'> {
  y?: number;
}

export interface SlideUpOnScrollProps
  extends Omit<BaseSlideProps, 'whileInView' | 'viewport'> {
  y?: number;
}

export interface SlideInProps extends Omit<BaseSlideProps, 'animate'> {
  x?: number;
}

export interface SlideFromLeftProps
  extends Omit<BaseSlideProps, 'whileInView' | 'viewport'> {
  direction?: 'left';
}

export interface SlideFromRightProps
  extends Omit<BaseSlideProps, 'whileInView' | 'viewport'> {
  direction?: 'right';
}
