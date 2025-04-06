import { motion } from 'framer-motion';
import { SlideFromLeft, SlideFromRight, SlideUpOnScroll } from '../animations';
import { scrollToSection } from '../../utils/functions';

const Services = () => {
  const handleScroll = () => {
    scrollToSection('contact-section');
  };
  return (
    <section
      className="relative z-10 lg:py-20 overflow-hidden"
      id="services-section"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#11071f] via-[#1a0b2e] to-[#11071f] overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-radial from-[#7127ba]/10 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-radial from-[#4f228d]/10 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-radial from-[#38126d]/10 to-transparent rounded-full blur-3xl opacity-40"></div>

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(to right, #7127ba 1px, transparent 1px), linear-gradient(to bottom, #7127ba 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container mx-auto  sm:px-6 lg:px-8 relative z-10">
        <SlideUpOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Services Offered
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Transforming ideas into exceptional digital experiences
          </p>
        </SlideUpOnScroll>

        {/* Service Cards - Redesigned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* E-Commerce */}
          <SlideFromLeft delay={0.1}>
            <ServiceCard
              icon={
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
                  />
                </svg>
              }
              title="E-Commerce Solutions"
              description="Custom online stores with secure payment processing, inventory management, and conversion-focused user experiences."
              features={[
                'Secure payment gateways',
                'Inventory tracking systems',
                'Mobile-optimized shopping',
              ]}
            />
          </SlideFromLeft>

          {/* Portfolio & Landing Pages */}
          <SlideUpOnScroll delay={0.2}>
            <ServiceCard
              icon={
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
                  />
                </svg>
              }
              title="Portfolio & Landing Pages"
              description="Stunning, high-converting websites designed to showcase your work and turn visitors into clients."
              features={[
                'Conversion-optimized layouts',
                'Interactive user experiences',
                'SEO-friendly architecture',
              ]}
            />
          </SlideUpOnScroll>

          {/* Custom Business Tools */}
          <SlideFromRight delay={0.3}>
            <ServiceCard
              icon={
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
                  />
                </svg>
              }
              title="Custom Business Tools"
              description="Tailored applications like invoice generators, CRM dashboards, and workflow automation tools."
              features={[
                'Invoice management systems',
                'Custom admin dashboards',
                'Workflow automation',
              ]}
            />
          </SlideFromRight>
        </div>

        {/* Bottom call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            onClick={handleScroll}
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl font-medium text-white shadow-lg shadow-[#7127ba]/20 border border-[#693b93] relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#4f228d] to-[#7127ba] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Let's Work Together</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Redesigned Service Card Component
const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full">
        {/* Background glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7127ba] to-[#4f228d] rounded-xl opacity-0 group-hover:opacity-60 blur-sm transition-all duration-300"></div>

        {/* Card content */}
        <div className="relative bg-gradient-to-br from-[#1a0b2e]/80 to-[#11071f] backdrop-blur-sm p-2 rounded-xl border border-[#4f228d]/30 h-full flex flex-col group">
          {/* Service icon */}
          <div className="mb-6 flex items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-lg flex items-center justify-center shadow-lg mr-4 group-hover:shadow-[#7127ba]/30 transition-all duration-300">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-zinc-300 mb-6">{description}</p>

          {/* Features */}
          <div className="mt-auto">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-zinc-300">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-[#38126d] rounded-full mr-3 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-[#7127ba]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
