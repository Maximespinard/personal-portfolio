import React, { useEffect } from 'react';
import { FadeIn, SlideUp, HoverScale } from '../animations';
import { useLanguage } from '../../contexts';

interface ContactErrorProps {
  onRetry: () => void;
  props: {
    t: (key: string, params?: Record<string, string | number>) => string;
  };
}

const ContactError: React.FC<ContactErrorProps> = ({ onRetry, props }) => {
  const { t: translate = (key) => key } = useLanguage();
  const t = props.t || translate;

  // Prevent scrolling while the error modal is shown
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <FadeIn
      className="fixed inset-0 z-50 flex items-center justify-center bg-main-background/90 backdrop-blur-md p-6"
      duration={0.4}
    >
      <SlideUp delay={0.2} duration={0.6} className="max-w-md w-full">
        <div className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-3xl shadow-2xl p-10 text-center border-2 border-[#2c1250]">
          <FadeIn delay={0.4} duration={0.5}>
            <div className="w-24 h-24 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-2xl mx-auto flex items-center justify-center mb-8 transform -rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </FadeIn>

          <SlideUp delay={0.5} duration={0.5} y={20}>
            <h3 className="text-4xl font-bold mb-4 text-white">
              {t('contact.error.title')}
            </h3>
          </SlideUp>

          <SlideUp delay={0.6} duration={0.5} y={20}>
            <p className="mb-12 text-zinc-300 text-lg">
              {t('contact.error.defaultMessage')}
            </p>
          </SlideUp>

          <FadeIn
            delay={0.8}
            duration={0.5}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <HoverScale scale={1.05}>
              <button
                onClick={onRetry}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#7127ba] to-[#4f228d] text-white font-medium rounded-xl transition duration-200 border border-[#693b93] shadow-lg shadow-[#7127ba]/20"
              >
                {t('contact.error.button')}
              </button>
            </HoverScale>
          </FadeIn>
        </div>
      </SlideUp>
    </FadeIn>
  );
};

export default ContactError;
