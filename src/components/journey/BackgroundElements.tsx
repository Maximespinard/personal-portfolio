import PurpleBg from '../../assets/ui/purple-bg.svg';
import { FadeIn } from '../animations';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 -top-[15%] z-0 pointer-events-none overflow-hidden">
      <FadeIn className="absolute inset-0 opacity-30">
        <PurpleBg className="w-full h-full" />
      </FadeIn>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7127ba]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#4f228d]/5 rounded-full blur-3xl"></div>
    </div>
  );
};
export default BackgroundElements;
