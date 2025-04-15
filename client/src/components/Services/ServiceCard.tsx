import React from 'react';
import { motion } from 'framer-motion';
import ServiceIcon from './ServiceIcon';
import { ServiceIconName } from '../../types';
import { useLanguage } from '../../contexts';

interface ServiceCardProps {
  serviceId: string;
  icon: ServiceIconName;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceId, icon }) => {
  const { t } = useLanguage();

  // Get title, description and features from translations
  const title = t(`services.${serviceId}.title`);
  const description = t(`services.${serviceId}.description`);
  const features = [0, 1, 2].map((i) =>
    t(`services.${serviceId}.features.${i}`)
  );

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
        <div className="relative p-6 bg-gradient-to-br from-[#1a0b2e]/80 to-[#11071f] backdrop-blur-sm rounded-xl border border-[#4f228d]/30 h-full flex flex-col group">
          {/* Service icon */}
          <div className="mb-6 flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-lg flex items-center justify-center shadow-lg mr-4 group-hover:shadow-[#7127ba]/30 transition-all duration-300 flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <ServiceIcon name={icon} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
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

export default ServiceCard;
