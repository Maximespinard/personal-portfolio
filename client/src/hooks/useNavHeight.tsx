import { useState, useEffect, useRef, RefObject } from 'react';

const useNavHeight = (): {
  navRef: RefObject<HTMLDivElement | null>;
  navHeight: number;
} => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    // Set initial height
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    // Optional: handle resize events if navbar height might change
    const handleResize = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { navRef, navHeight };
};

export default useNavHeight;
