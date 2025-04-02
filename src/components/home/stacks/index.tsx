import React, { SVGProps } from 'react';
import {
  SlideFromLeft,
  SlideFromRight,
  SlideIn,
  SlideUpOnScroll,
} from '../../animations';
import StackItems from './StackItems';
import useBreakPoint from '../../../hooks/useBreakPoint';
import { stacksData } from '../../../utils/data';

import StackWebImage from '../../../assets/ui/stack-web.svg';

const StackWebImageWithProps: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <StackWebImage {...props} />;
};

const Stacks: React.FC = () => {
  const { isMinTablet } = useBreakPoint();
  const techStackGroup1 = isMinTablet
    ? stacksData.slice(0, 7)
    : stacksData.slice(0, 6);
  const techStackGroup2 = stacksData.slice(7, 13);

  return (
    <div>
      <SlideIn>
        <h4 className="text-xl text-center lg:text-2xl">
          Scaling distributed systems to{' '}
          <span className="text-purple-400 whitespace-nowrap">
            interactive UIs
          </span>
        </h4>
        <p className="text-center text-xs md:text-base">
          Fueled by modern stacks and obsessive optimization
        </p>
      </SlideIn>

      <SlideFromLeft className="mb-5" delay={0.25}>
        <StackItems stacks={techStackGroup1} />
      </SlideFromLeft>
      <SlideFromRight delay={0.5}>
        <StackItems stacks={techStackGroup2} />
      </SlideFromRight>

      <SlideUpOnScroll delay={0.75} duration={1}>
        <div className="overflow-hidden  flex justify-center">
          <StackWebImageWithProps className="min-w-[882px] h-auto" />
        </div>
      </SlideUpOnScroll>
    </div>
  );
};

export default Stacks;
