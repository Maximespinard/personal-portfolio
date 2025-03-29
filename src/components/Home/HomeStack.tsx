import React, { SVGProps } from 'react';
import StackWebImage from '../../assets/ui/stack-web.svg';
import useBreakPoint from '../../hooks/useBreakPoint';
import { stacksData } from '../../utils/data';
import { StackItem } from '../../types';

interface StackWebImageProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const StackWebImageWithProps: React.FC<StackWebImageProps> = (props) => {
  return <StackWebImage {...props} />;
};

const HomeStack = () => {
  const { isMinTablet } = useBreakPoint();
  const techStackGroup1 = isMinTablet
    ? stacksData.slice(0, 7)
    : stacksData.slice(0, 6);
  const techStackGroup2 = stacksData.slice(7, 13);

  const StackItems = ({ stacks }: { stacks: StackItem[] }) => (
    <div className="flex items-center justify-center space-x-2 md:space-x-3">
      {stacks.map((stack, i) => {
        const Icon = stack.icon;
        return (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-center w-12 h-12 bg-gray-800/50 rounded-full shadow-lg"
          >
            {Icon && <Icon className="w-8 h-8 text-purple-400" />}
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <h4 className="text-xl text-center lg:text-2xl">
        Scaling distributed systems to{' '}
        <span className="text-purple-400 whitespace-nowrap">
          interactive UIs
        </span>
      </h4>
      <p className="text-center text-xs md:text-base">
        Fueled by modern stacks and obsessive optimization
      </p>
      <div className="space-y-4 mt-10">
        <StackItems stacks={techStackGroup1} />
        <StackItems stacks={techStackGroup2} />
      </div>
      <div className="overflow-hidden -mx-10 sm:-mx-20 md:-mx-30 flex justify-center">
        <StackWebImageWithProps className="min-w-[882px] h-auto -mt-3" />
      </div>
    </div>
  );
};

export default HomeStack;
