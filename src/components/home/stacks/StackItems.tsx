import React from 'react';
import { StackItem } from '../../../types';

const StackIcon: React.FC<{ stack: StackItem }> = ({ stack }) => {
  const Icon = stack.icon;
  return (
    <div className="flex flex-col items-center justify-center text-center w-12 h-12 bg-gray-800/50 rounded-full shadow-lg">
      {Icon && <Icon className="w-8 h-8 text-purple-400" />}
    </div>
  );
};

const StackItems: React.FC<{ stacks: StackItem[] }> = ({ stacks }) => (
  <div className="flex items-center justify-center space-x-2 md:space-x-3">
    {stacks.map((stack, i) => (
      <StackIcon key={i} stack={stack} />
    ))}
  </div>
);

export default StackItems;
