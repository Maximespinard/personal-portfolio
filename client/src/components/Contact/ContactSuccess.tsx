import React, { useEffect } from 'react';
import { FadeIn, SlideUp, HoverScale } from '../animations';
import { useLanguage } from '../../contexts';

interface ContactSuccessProps {
  onReset: () => void;
  props: {
    t?: (key: string, params?: Record<string, string | number>) => string;
  };
}

const ContactSuccess: React.FC<ContactSuccessProps> = ({ onReset, props }) => {
  const { t: translate = (key) => key } = useLanguage();
  const t = props.t || translate;
  // Prevent scrolling while the success modal is shown
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
            <div className="w-24 h-24 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-2xl mx-auto flex items-center justify-center mb-8 transform rotate-12">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </FadeIn>

          <SlideUp delay={0.5} duration={0.5} y={20}>
            <h3 className="text-4xl font-bold mb-4 text-white">
              {t('contact.success.title')}
            </h3>
          </SlideUp>

          <SlideUp delay={0.6} duration={0.5} y={20}>
            <p className="mb-12 text-zinc-300 text-lg">
              {t('contact.success.message')
                .split('\n')
                .map((line: string, i: number) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
            </p>
          </SlideUp>

          <FadeIn delay={0.8} duration={0.5}>
            <HoverScale scale={1.05}>
              <button
                onClick={onReset}
                className="px-10 py-4 bg-gradient-to-r from-[#7127ba] to-[#4f228d] text-white font-medium rounded-xl transition duration-200 border border-[#693b93] shadow-lg shadow-[#7127ba]/20"
              >
                {t('contact.success.button')}
              </button>
            </HoverScale>
          </FadeIn>
        </div>
      </SlideUp>
    </FadeIn>
  );
};

export default ContactSuccess;
