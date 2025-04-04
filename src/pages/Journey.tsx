import React from 'react';
import {
  FadeIn,
  SlideUpOnScroll,
  SlideFromLeft,
  SlideFromRight,
  HoverScale,
} from '../components/animations';
import { experiences } from '../utils/data';
import { stacksData } from '../utils/data';
import PurpleBg from '../assets/ui/purple-bg.svg';
import ProjectCard from '../components/journey/ProjectCard';
import SkillsSpotlight from '../components/journey/SkillsSpotlight';

// Custom icons for projects (SVG components)
const CarSharingIcon: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#251c31" />
    <path
      d="M58 42.8V56H53V51H27V56H22V42.8C22 41.12 22.64 39.52 23.76 38.4L28 34.16V25C28 21.68 30.68 19 34 19H46C49.32 19 52 21.68 52 25V34.16L56.24 38.4C57.36 39.52 58 41.12 58 42.8ZM30 56H50V61H30V56ZM34 43C32.34 43 31 44.34 31 46C31 47.66 32.34 49 34 49C35.66 49 37 47.66 37 46C37 44.34 35.66 43 34 43ZM46 43C44.34 43 43 44.34 43 46C43 47.66 44.34 49 46 49C47.66 49 49 47.66 49 46C49 44.34 47.66 43 46 43ZM52 34H28V42H52V34Z"
      fill="#7127ba"
    />
  </svg>
);

const ELearningIcon: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#251c31" />
    <path
      d="M52 21H28C25.8 21 24 22.8 24 25V49C24 51.2 25.8 53 28 53H40V57H36V61H44V57H40V53H52C54.2 53 56 51.2 56 49V25C56 22.8 54.2 21 52 21ZM52 49H28V25H52V49ZM40 45.14L48 41V35.6L40 39.75L32 35.6V41L40 45.14Z"
      fill="#7127ba"
    />
  </svg>
);

const VisualHubIcon: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#251c31" />
    <path
      d="M40 47.5C44.14 47.5 47.5 44.14 47.5 40C47.5 35.86 44.14 32.5 40 32.5C35.86 32.5 32.5 35.86 32.5 40C32.5 44.14 35.86 47.5 40 47.5ZM40 35C42.76 35 45 37.24 45 40C45 42.76 42.76 45 40 45C37.24 45 35 42.76 35 40C35 37.24 37.24 35 40 35ZM24.06 30L27.5 26.56L30.94 30L33 27.94L29.56 24.5L33 21.06L30.94 19L27.5 22.44L24.06 19L22 21.06L25.44 24.5L22 27.94L24.06 30ZM54 39H59V41H54V39ZM40 21H42V26H40V21ZM40 54H42V59H40V54ZM21 39H26V41H21V41ZM49.94 30L53.38 26.56L56.82 30L58.88 27.94L55.44 24.5L58.88 21.06L56.82 19L53.38 22.44L49.94 19L47.88 21.06L51.32 24.5L47.88 27.94L49.94 30Z"
      fill="#7127ba"
    />
  </svg>
);

const AutoRentalIcon: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#251c31" />
    <path
      d="M55 24L50 19H30L25 24H17V27H20.76C19.65 28.55 19 30.41 19 32.5V54C19 55.1 19.9 56 21 56H25C26.1 56 27 55.1 27 54V50H53V54C53 55.1 53.9 56 55 56H59C60.1 56 61 55.1 61 54V32.5C61 30.41 60.35 28.55 59.24 27H63V24H55ZM31.5 24H48.5L51.5 27H28.5L31.5 24ZM23 42.5C20.51 42.5 18.5 40.49 18.5 38C18.5 35.51 20.51 33.5 23 33.5C25.49 33.5 27.5 35.51 27.5 38C27.5 40.49 25.49 42.5 23 42.5ZM57 42.5C54.51 42.5 52.5 40.49 52.5 38C52.5 35.51 54.51 33.5 57 33.5C59.49 33.5 61.5 35.51 61.5 38C61.5 40.49 59.49 42.5 57 42.5ZM23 46H57V50H23V46Z"
      fill="#7127ba"
    />
  </svg>
);

// Journey Page Component
const Journey: React.FC = () => {
  // Array of project icons to map with experiences

  // Filter out a subset of stack items to show

  return (
    <div className="space-y-16 relative">
      {/* Header Section with Background Effect */}
      <div className="relative pt-10 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e]/60 to-[#11071f] z-0"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7127ba]/20 via-transparent to-transparent blur-xl"></div>
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#7127ba]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-40 w-80 h-80 bg-[#4f228d]/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <SlideFromLeft delay={0.2} className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Transforming Ideas Into Digital Solutions
            </h1>
          </SlideFromLeft>

          <SlideFromRight delay={0.4} className="mb-8">
            <p className="text-lg md:text-xl text-zinc-300 mt-4 max-w-3xl mx-auto">
              From concept to deployment, I craft tailor-made web applications
              that solve real business challenges. My expertise spans the entire
              development lifecycle with a focus on creating scalable,
              maintainable solutions.
            </p>
          </SlideFromRight>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <HoverScale>
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl text-white font-medium shadow-lg shadow-purple-900/20 border border-[#693b93]"
                >
                  View Projects
                </a>
              </HoverScale>
              <HoverScale>
                <a
                  href="#contact-section"
                  className="px-8 py-3 bg-[#251c31] border border-[#4f228d] rounded-xl text-white font-medium"
                >
                  Hire Me
                </a>
              </HoverScale>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Career Timeline Section */}
      <section className="relative z-10 px-4">
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
                small websites and exploring UI libraries. Developed a passion
                for creating intuitive user experiences.
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
                MongoDB. Mastered the art of building full-stack applications
                and RESTful APIs.
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
                needing custom web solutions. Focused on delivering
                high-quality, scalable applications that drive real results.
              </p>
            </SlideFromRight>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section id="projects" className="relative z-10 px-4">
        <SlideUpOnScroll className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Click on a project to explore details
          </p>
        </SlideUpOnScroll>

        <div className="max-w-5xl mx-auto">
          {experiences.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              icon={
                index === 0 ? (
                  <CarSharingIcon />
                ) : index === 1 ? (
                  <ELearningIcon />
                ) : index === 2 ? (
                  <VisualHubIcon />
                ) : (
                  <AutoRentalIcon />
                )
              }
            />
          ))}
        </div>
      </section>
      {/* Skills Section */}
      <SkillsSpotlight />

      {/* Services Section */}
      <section className="relative z-10 px-4 pb-24 overflow-hidden">
        <SlideUpOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Services Offered
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Transforming ideas into exceptional digital experiences
          </p>
        </SlideUpOnScroll>

        {/* Background accents */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-40 -left-20 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* E-Commerce */}
            <SlideFromLeft delay={0.1}>
              <div className="group relative">
                {/* Card glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-2xl opacity-0 group-hover:opacity-70 blur transition duration-500"></div>

                <div className="relative bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-8 rounded-2xl border border-[#2c1250] h-full transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <div className="absolute right-6 top-6 opacity-20">
                    <svg
                      className="w-24 h-24 text-[#7127ba]/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                  </div>

                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    E-Commerce Solutions
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    Custom online stores with secure payment processing,
                    inventory management, and conversion-focused user
                    experiences.
                  </p>

                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Secure payment gateways
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Inventory tracking systems
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Mobile-optimized shopping
                    </li>
                  </ul>
                </div>
              </div>
            </SlideFromLeft>

            {/* Portfolio & Landing Pages */}
            <SlideUpOnScroll delay={0.2}>
              <div className="group relative">
                {/* Card glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-2xl opacity-0 group-hover:opacity-70 blur transition duration-500"></div>

                <div className="relative bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-8 rounded-2xl border border-[#2c1250] h-full transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <div className="absolute right-6 top-6 opacity-20">
                    <svg
                      className="w-24 h-24 text-[#7127ba]/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>

                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      ></path>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Portfolio & Landing Pages
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    Stunning, high-converting websites designed to showcase your
                    work and turn visitors into clients.
                  </p>

                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Conversion-optimized layouts
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Interactive user experiences
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      SEO-friendly architecture
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUpOnScroll>

            {/* Custom Business Tools */}
            <SlideFromRight delay={0.3}>
              <div className="group relative">
                {/* Card glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-2xl opacity-0 group-hover:opacity-70 blur transition duration-500"></div>

                <div className="relative bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-8 rounded-2xl border border-[#2c1250] h-full transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <div className="absolute right-6 top-6 opacity-20">
                    <svg
                      className="w-24 h-24 text-[#7127ba]/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>

                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Custom Business Tools
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    Tailored applications like invoice generators, CRM
                    dashboards, and workflow automation tools.
                  </p>

                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Invoice management systems
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Custom admin dashboards
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      Workflow automation
                    </li>
                  </ul>
                </div>
              </div>
            </SlideFromRight>
          </div>

          <FadeIn delay={0.5} className="mt-16 text-center">
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl opacity-70 blur-sm"></div>
              <HoverScale>
                <a
                  href="#contact-section"
                  className="relative inline-block px-10 py-5 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl text-white font-medium shadow-lg shadow-purple-900/20 border border-[#693b93] text-lg"
                >
                  Let's Build Something Amazing
                </a>
              </HoverScale>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Background Elements */}
      <div className="absolute inset-0 -top-[15%] z-0 pointer-events-none overflow-hidden">
        <FadeIn className="absolute inset-0 opacity-30">
          <PurpleBg className="w-full h-full" />
        </FadeIn>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7127ba]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#4f228d]/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Journey;
