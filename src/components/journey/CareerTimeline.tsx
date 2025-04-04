import { SlideFromLeft, SlideFromRight, SlideUpOnScroll } from '../animations';

const CareerTimeline = () => {
  return (
    <section className="relative z-10 sm:px-4">
      <SlideUpOnScroll className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Professional Path</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          My journey from exploring code to delivering enterprise solutions
        </p>
      </SlideUpOnScroll>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <SlideFromLeft
            delay={0.1}
            className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-6 rounded-xl border border-[#2c1250]"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#251c31] rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-[#7127ba]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Self-Taught Foundations</h3>
            </div>
            <p className="text-zinc-400">
              Started with frontend basics (HTML, CSS, JavaScript), building
              small websites and exploring UI libraries. Developed a passion for
              creating intuitive user experiences.
            </p>
          </SlideFromLeft>

          <SlideFromRight
            delay={0.2}
            className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-6 rounded-xl border border-[#2c1250]"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#251c31] rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-[#7127ba]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fullstack Evolution</h3>
            </div>
            <p className="text-zinc-400">
              Expanded into backend development with Node.js, Express and
              MongoDB. Mastered the art of building full-stack applications and
              RESTful APIs.
            </p>
          </SlideFromRight>

          <SlideFromLeft
            delay={0.3}
            className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-6 rounded-xl border border-[#2c1250]"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#251c31] rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-[#7127ba]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Professional Growth</h3>
            </div>
            <p className="text-zinc-400">
              Led development teams on complex projects, implementing modern
              frameworks like React and Next.js. Refined skills in system
              architecture and project management.
            </p>
          </SlideFromLeft>

          <SlideFromRight
            delay={0.4}
            className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-6 rounded-xl border border-[#2c1250]"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#251c31] rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-[#7127ba]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Independent Consultant</h3>
            </div>
            <p className="text-zinc-400">
              Now providing specialized development services for businesses
              needing custom web solutions. Focused on delivering high-quality,
              scalable applications that drive real results.
            </p>
          </SlideFromRight>
        </div>
      </div>
    </section>
  );
};
export default CareerTimeline;
