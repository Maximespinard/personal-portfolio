import { useEffect, useState } from 'react';
import PurpleBg from '../../assets/ui/purple-bg.svg';
import { FadeIn } from '../animations';
import useNavHeight from '../../hooks/useNavHeight';
import useBreakPoint from '../../hooks/useBreakPoint';
import Introduction from './Introduction';
import IntroShowCase from '../IntroShowcase';

const Hero = () => {
  const { navHeight } = useNavHeight();
  const { isMinTablet } = useBreakPoint();
  const [heroStyle, setHeroStyle] = useState({});

  useEffect(() => {
    if (isMinTablet) {
      // Change to use flex properties for better vertical centering
      setHeroStyle({
        minHeight: `calc(90vh - ${navHeight}px)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      });
    } else {
      setHeroStyle({
        minHeight: '100%',
      });
    }
  }, [isMinTablet, navHeight]);

  return (
    <div className="relative" style={heroStyle}>
      <FadeIn className="absolute inset-0 top-0 z-0 pointer-events-none">
        <PurpleBg className="w-full h-full" />
      </FadeIn>

      {/* Content positioned relative to appear above the background */}
      <div className="relative flex flex-col justify-center z-10 h-full md:gap-10 md:mb-[3%]">
        <Introduction />
        <IntroShowCase />
      </div>
    </div>
  );
};

export default Hero;
