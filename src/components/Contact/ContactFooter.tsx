import React from 'react';
import { SlideFromRight, HoverScale } from '../animations';

interface ContactFooterProps {
  onSubmit: () => void;
  isSubmitting: boolean;
}

const ContactFooter: React.FC<ContactFooterProps> = ({
  onSubmit,
  isSubmitting,
}) => {
  return (
    <SlideFromRight delay={0.3} className="mt-8">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <HoverScale scale={1.03}>
          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl font-medium text-white shadow-lg shadow-[#7127ba]/20 flex items-center justify-center disabled:opacity-70 border border-[#693b93]"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>Send Message</>
            )}
          </button>
        </HoverScale>
      </div>
    </SlideFromRight>
  );
};

export default ContactFooter;
