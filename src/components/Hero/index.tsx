import { useEffect, useState } from 'react';
import PurpleBg from '../../assets/ui/purple-bg.svg';
import { FadeIn } from '../animations';
import Introduction from './Introduction';
import useNavHeight from '../../hooks/useNavHeight';
import useBreakPoint from '../../hooks/useBreakPoint';
import IntroShowCase from '../IntroShowcase';

const Hero = () => {
  const { navHeight } = useNavHeight();
  const { isMinTablet } = useBreakPoint();
  const [heroStyle, setHeroStyle] = useState({});

  useEffect(() => {
    if (isMinTablet) {
      setHeroStyle({ minHeight: `calc(80vh - ${navHeight}px)` });
    } else {
      setHeroStyle({});
    }
  }, [isMinTablet, navHeight]);

  return (
    <div className="relative" style={heroStyle}>
      <FadeIn className="absolute inset-0 top-0 z-0 pointer-events-none">
        <PurpleBg className="w-full h-full" />
      </FadeIn>

      {/* Content positioned relative to appear above the background */}
      <div className="relative flex flex-col justify-between z-10 md:space-y-10">
        <Introduction />
        <IntroShowCase />
      </div>
    </div>
  );
};

export default Hero;
