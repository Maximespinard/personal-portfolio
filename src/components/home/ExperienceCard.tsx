import { ExperienceItem } from '../../types';
import { SlideUpOnScroll } from '../animations';

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <SlideUpOnScroll className="bg-custom-gradient py-8 px-5 border-t-2 border-bright-purple rounded-3xl">
      <div className="space-y-2 relative lg:flex lg:items-center lg:justify-center lg:space-x-4">
        <img
          src={item.icon}
          alt="icon"
          className=" rounded-full hidden lg:block! md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
        />
        <div className="space-y-4 md:space-y-3">
          <h3 className="text-xl font-semibold text-center lg:text-left">
            {item.title}
          </h3>
          <p className="text-xs text-center w-3/4 md:w-1/2 lg:w-full mx-auto sm:mx-auto lg:text-left">
            {item.description}
          </p>
          <button
            type="button"
            className="mx-auto w-fit block lg:inline px-6 py-3 md:px-10 bg-button-bg rounded-xl border-2 border-button-border uppercase
           transition-all duration-300
           hover:bg-purple-900 hover:scale-103 hover:border-button-border-hover
           active:scale-97 cursor-pointer text-xs"
          >
            Learn more
          </button>
        </div>
      </div>
    </SlideUpOnScroll>
  );
};

export default ExperienceCard;
