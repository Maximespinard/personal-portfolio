import { useMediaQuery } from 'react-responsive';

const useBreakPoint = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)',
  });

  return { isMobile };
};

export default useBreakPoint;
