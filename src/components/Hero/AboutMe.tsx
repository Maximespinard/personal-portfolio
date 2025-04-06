import React from 'react';
import { SlideUp, FadeIn } from '../animations';

const HomeAboutMe: React.FC = () => {
  return (
    <SlideUp
      delay={0.5}
      className="text-center mb-15 md:mb-0 lg:h-[300px] mt-12 sm:mt-8"
    >
      <FadeIn delay={0.6}>
        <h3 className="text-2xl md:text-3xl font-semibold">
          I'm a Fullstack Developper
        </h3>
        <p className="md:text-base italic mt-1 text-zinc-300">
          Orchestring the full tech stack symphony
        </p>
      </FadeIn>
      <FadeIn delay={0.7}>
        <div className="mt-8 text-center px-4 sm:px-8 md:text-base lg:text-xl lg:w-2/3 lg:mx-auto">
          A code alchemist with <strong>7+ years </strong>
          of transmuting ideas into production apps. My fullstack craft merges
          bleeding-edge tools with enterprise-grade reliability.
        </div>
      </FadeIn>
    </SlideUp>
  );
};

export default HomeAboutMe;
