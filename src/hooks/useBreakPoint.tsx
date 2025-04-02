import { useMediaQuery } from 'react-responsive';

const useBreakPoint = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const isMinTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return { isDesktop, isMinTablet, isMobile };
};

export default useBreakPoint;
