import React from 'react';
import { HoverScale } from '../animations';
import { scrollToSection } from '../../utils/functions';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] border-t border-[#2c1250] py-6 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and name */}
          <div className="mb-4 md:mb-0">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Maxime Spinard. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection('services-section')}
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('career-section')}
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection('projects-section')}
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Projects
            </button>
          </div>

          {/* Social link */}
          <div>
            <HoverScale scale={1.1}>
              <a
                href="https://www.linkedin.com/in/maxime-spinard-%F0%9F%8D%80-18370a1a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#251c31] rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#2c1250] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </HoverScale>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
