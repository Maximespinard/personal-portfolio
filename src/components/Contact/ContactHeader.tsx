import React from 'react';

const ContactHeader: React.FC = () => {
  return (
    <>
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-xl flex items-center justify-center transform -rotate-12 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white">Let's Collaborate</h2>
      </div>
      <p className="text-zinc-400 text-lg mb-10 max-w-2xl">
        Ready to build something exceptional? Contact me now for fast,
        professional development services that deliver results.
      </p>
    </>
  );
};

export default ContactHeader;
