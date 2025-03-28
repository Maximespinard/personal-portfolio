import { ComponentType, SVGProps } from 'react';
import StackWebImage from '../../assets/ui/stack-web.svg';

import useBreakPoint from '../../hooks/useBreakPoint';
import { technicalStacks } from '../../utils/data';

interface StackItem {
  icon: ComponentType<SVGProps<SVGSVGElement>> | string;
  description: string;
}

const HomeStack = () => {
  const { isMinTablet } = useBreakPoint();
  const firstRow = isMinTablet
    ? technicalStacks.slice(0, 7)
    : technicalStacks.slice(0, 6);
  const secondRow = technicalStacks.slice(7, 13);

  const StackItems = (stacks: StackItem[]) => {
    return (
      <div className="flex items-center justify-center gap-4">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center w-11 h-11 md:w-14 md:h-14 bg-gray-800/50 rounded-full shadow-lg"
          >
            {typeof stack.icon === 'string' ? (
              <img
                src={stack.icon}
                alt={stack.description}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            ) : (
              <stack.icon className="w-8 h-8 md:w-10 md:h-10" />
            )}
          </div>
        ))}
      </div>
    );
  };

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
        {StackItems(firstRow)}
        {StackItems(secondRow)}
      </div>
      {/* Conteneur pour l'image SVG */}
      <div className="overflow-hidden -mx-10 sm:-mx-20 md:-mx-30 flex justify-center">
        {/* StackWebImage avec une largeur minimale et hauteur auto, le tout via className */}
        <StackWebImage className="min-w-[882px] w-[882px] h-auto object-none" />
      </div>
    </div>
  );
};

export default HomeStack;
