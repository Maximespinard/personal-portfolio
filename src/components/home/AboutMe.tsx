import { SlideUp } from '../animations';

const HomeAboutMe = () => {
  return (
    <SlideUp delay={0.5} className="text-center mb-15 lg:h-[300px]">
      <h3 className="text-2xl mb-1 md:text-3xl">I'm a Fullstack Developper</h3>
      <p className="md:text-base italic">
        Orchestring the full tech stack symphony
      </p>
      <div className="mt-8 text-center md:text-base lg:text-xl lg:w-2/3 lg:mx-auto">
        A code alchemist with <strong>7+ years </strong>of transmuting ideas
        into production apps. My fullstack craft merges bleeding-edge tools with
        enterprise-grade reliability.
      </div>
    </SlideUp>
  );
};
export default HomeAboutMe;
