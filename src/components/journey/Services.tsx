import { SlideFromLeft, SlideFromRight, SlideUpOnScroll } from '../animations';

const Services = () => {
  return (
    <section className="relative z-10 sm:px-4 pb-24 overflow-hidden">
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
      {/* Service Cards */}
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
                  Custom online stores with secure payment processing, inventory
                  management, and conversion-focused user experiences.
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
                  Tailored applications like invoice generators, CRM dashboards,
                  and workflow automation tools.
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
      </div>
    </section>
  );
};
export default Services;
