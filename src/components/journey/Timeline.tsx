import React from 'react';
import { SlideFromLeft, SlideFromRight, FadeIn } from '../animations';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isRight?: boolean;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  isRight = false,
  delay = 0,
}) => {
  const AnimationComponent = isRight ? SlideFromRight : SlideFromLeft;

  return (
    <div className="relative flex items-center justify-center mb-16 last:mb-0">
      {/* Timeline line */}
      <div className="absolute top-0 left-1/2 -ml-px h-full w-0.5 bg-gradient-to-b from-[#7127ba] to-[#4f228d]"></div>

      {/* Content */}
      <AnimationComponent
        delay={delay}
        className={`relative ${isRight ? 'ml-8 md:ml-12' : 'mr-8 md:mr-12'} max-w-md`}
      >
        <div className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-6 rounded-2xl border border-[#2c1250] shadow-xl">
          <span className="text-main-purple font-semibold">{year}</span>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <p className="text-zinc-400 mt-2">{description}</p>
        </div>
      </AnimationComponent>

      {/* Circle marker */}
      <FadeIn
        delay={delay + 0.2}
        className="absolute left-1/2 -ml-2.5 w-5 h-5 rounded-full bg-[#7127ba] border-2 border-[#4f228d] z-10"
      />
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineData = [
    {
      year: '2018',
      title: 'Beginning the Journey',
      description:
        "Started my development journey by learning core web technologies and completing a 6-month intensive online course at O'clock.",
      isRight: false,
    },
    {
      year: '2018-2020',
      title: 'Freelance Development',
      description:
        'Built my skills as a freelance developer, working on diverse projects and expanding my technical toolkit.',
      isRight: true,
    },
    {
      year: '2020-2023',
      title: 'Payment Startup',
      description:
        'Joined a major payment startup, where I spent almost three years developing robust payment solutions and working with scalable systems.',
      isRight: false,
    },
    {
      year: 'Present',
      title: 'Fullstack Expert',
      description:
        'Now working as a seasoned fullstack developer with 7+ years of experience, taking on complex projects and delivering high-quality solutions.',
      isRight: true,
    },
  ];

  return (
    <section className="mt-10 mb-16">
      <SlideFromLeft className="mb-12 text-center">
        <h2 className="text-3xl font-bold">Career Timeline</h2>
        <p className="text-zinc-400 mt-2">
          My professional development over the years
        </p>
      </SlideFromLeft>

      <div className="relative mt-16 px-4">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            isRight={item.isRight}
            delay={0.2 + index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
