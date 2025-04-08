import React from 'react';
import { HoverScale } from '../animations';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 z-20 ${
        direction === 'left'
          ? 'left-0 -translate-x-5 lg:-translate-x-10'
          : 'right-0 translate-x-5 lg:translate-x-10'
      }`}
    >
      <HoverScale>
        <button
          onClick={onClick}
          className="bg-[#251c31] border border-[#4f228d] rounded-full p-2 md:p-3 text-white shadow-lg hover:bg-[#2c1250] transition-colors"
          aria-label={`Scroll ${direction}`}
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {direction === 'left' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            )}
          </svg>
        </button>
      </HoverScale>
    </div>
  );
};

export default ScrollButton;
