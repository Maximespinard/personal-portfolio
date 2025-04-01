import React, { useRef, useEffect } from 'react';

interface MobileDrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  children: React.ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isDrawerOpen,
  toggleDrawer,
  children,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        toggleDrawer();
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDrawerOpen, toggleDrawer]);

  return (
    <div
      ref={drawerRef}
      className={`fixed top-0 left-0 h-screen w-64 bg-navbar text-white transform transition-transform duration-300 ease-in-out z-50 ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      } flex flex-col shadow-2xl`}
    >
      <div className="p-4 flex justify-end">
        <button
          onClick={toggleDrawer}
          className="focus:outline-none"
          aria-label="Fermer le menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
};

export default MobileDrawer;
