import { useEffect, useState } from 'react';
import PurpleBg from '../../assets/ui/purple-bg.svg';
import { FadeIn } from '../animations';
import Introduction from './Introduction';
import HomeAboutMe from './AboutMe';
import useNavHeight from '../../hooks/useNavHeight';
import useBreakPoint from '../../hooks/useBreakPoint';
import ScrollDownButton from './ScrollDownBtn';

const Hero = () => {
  const { navHeight } = useNavHeight();
  const { isMinTablet } = useBreakPoint();
  const [heroStyle, setHeroStyle] = useState({});

  useEffect(() => {
    if (isMinTablet) {
      setHeroStyle({ minHeight: `calc(100vh - ${navHeight}px)` });
    } else {
      setHeroStyle({});
    }
  }, [isMinTablet, navHeight]);

  return (
    <div className="relative md:min-h-[75vh] md:pt-10" style={heroStyle}>
      <FadeIn className="absolute inset-0 top-0 z-0 pointer-events-none">
        <PurpleBg className="w-full h-full" />
      </FadeIn>

      {/* Content positioned relative to appear above the background */}
      <div className="relative z-10">
        <Introduction />
        <HomeAboutMe />
      </div>
      {isMinTablet && (
        <div className="absolute top-[70vh] left-0 right-0 flex justify-center">
          <ScrollDownButton />
        </div>
      )}
    </div>
  );
};

export default Hero;
