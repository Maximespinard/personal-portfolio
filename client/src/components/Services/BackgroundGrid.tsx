import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#11071f] via-[#1a0b2e] to-[#11071f] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-radial from-[#7127ba]/10 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-radial from-[#4f228d]/10 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-radial from-[#38126d]/10 to-transparent rounded-full blur-3xl opacity-40"></div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(to right, #7127ba 1px, transparent 1px), linear-gradient(to bottom, #7127ba 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>
    </div>
  );
};

export default BackgroundGrid;
