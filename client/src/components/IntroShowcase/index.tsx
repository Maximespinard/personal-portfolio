import { scrollToSection } from '../../utils/functions';
import { useLanguage } from '../../contexts';

const IntroShowCase = () => {
  const { t } = useLanguage();
  return (
    <div
      className="relative pt-4 pb-16 overflow-hidden"
      id="intro-showcase-section"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 mb-4">
          {t('intro.title')}
        </h1>
        <p className="text-lg md:text-base text-zinc-300 mt-4 max-w-3xl mx-auto mb-8">
          {t('intro.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-4 justify-center mt-10 sm:mt-8">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects-section');
            }}
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl text-white font-medium shadow-lg shadow-purple-900/20 border border-[#693b93]"
          >
            {t('hero.cta.projects')}
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact-section');
            }}
            href="#contact-section"
            className="px-8 py-3 bg-[#251c31] border border-[#4f228d] rounded-xl text-white font-medium"
          >
            {t('hero.cta.hire')}
          </a>
        </div>
      </div>
    </div>
  );
};
export default IntroShowCase;
