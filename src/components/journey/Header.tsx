import {
  FadeIn,
  HoverScale,
  SlideFromLeft,
  SlideFromRight,
} from '../animations';

const Header = () => {
  return (
    <div className="relative pt-10 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e]/60 to-[#11071f] z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7127ba]/20 via-transparent to-transparent blur-xl"></div>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#7127ba]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-40 w-80 h-80 bg-[#4f228d]/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <SlideFromLeft delay={0.2} className="mb-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Transforming Ideas Into Digital Solutions
          </h1>
        </SlideFromLeft>

        <SlideFromRight delay={0.4} className="mb-8">
          <p className="text-lg md:text-xl text-zinc-300 mt-4 max-w-3xl mx-auto">
            From concept to deployment, I craft tailor-made web applications
            that solve real business challenges. My expertise spans the entire
            development lifecycle with a focus on creating scalable,
            maintainable solutions.
          </p>
        </SlideFromRight>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <HoverScale>
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl text-white font-medium shadow-lg shadow-purple-900/20 border border-[#693b93]"
              >
                View Projects
              </a>
            </HoverScale>
            <HoverScale>
              <a
                href="#contact-section"
                className="px-8 py-3 bg-[#251c31] border border-[#4f228d] rounded-xl text-white font-medium"
              >
                Hire Me
              </a>
            </HoverScale>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Header;
