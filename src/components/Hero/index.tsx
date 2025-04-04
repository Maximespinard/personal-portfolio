import PurpleBg from '../../assets/ui/purple-bg.svg';
import { FadeIn } from '../animations';
import Introduction from './Introduction';
import HomeAboutMe from './AboutMe';

const Hero = () => {
  return (
    <div className="relative md:min-h-[75vh] md:pt-10">
      <FadeIn className="absolute inset-0 top-0 z-0 pointer-events-none">
        <PurpleBg className="w-full h-full" />
      </FadeIn>
      {/* Content positioned relative to appear above the background */}
      <div className="relative z-10">
        <Introduction />
        <HomeAboutMe />
      </div>
    </div>
  );
};
export default Hero;
