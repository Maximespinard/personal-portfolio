import React from 'react';
import { MotionDiv } from '../animations/MotionElement';

interface CallToActionButtonProps {
  onClick: () => void;
  text: string;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  onClick,
  text,
}) => {
  return (
    <MotionDiv
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <MotionDiv
        onClick={onClick}
        className="inline-block px-10 py-4 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl font-medium text-white shadow-lg shadow-[#7127ba]/20 border border-[#693b93] relative overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#4f228d] to-[#7127ba] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10">{text}</span>
      </MotionDiv>
    </MotionDiv>
  );
};

export default CallToActionButton;
