import React from 'react';
import { FadeIn, HoverScale } from '../../animations';

interface ContactSuccessProps {
  onReset: () => void;
}

const ContactSuccess: React.FC<ContactSuccessProps> = ({ onReset }) => {
  return (
    <FadeIn className="max-w-md mx-auto bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-3xl shadow-2xl p-10 text-center border border-[#2c1250]">
      <div className="w-20 h-20 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-2xl mx-auto flex items-center justify-center mb-8 transform rotate-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-3xl font-bold mb-3 text-white">Thank You!</h3>
      <p className="mb-8 text-zinc-400 text-lg">
        Your message has been sent successfully. I'll get back to you soon.
      </p>
      <HoverScale scale={1.05}>
        <button
          onClick={onReset}
          className="px-8 py-3 bg-gradient-to-r from-[#7127ba] to-[#4f228d] text-white font-medium rounded-xl transition duration-200 border border-[#693b93]"
        >
          Send Another Message
        </button>
      </HoverScale>
    </FadeIn>
  );
};

export default ContactSuccess;
