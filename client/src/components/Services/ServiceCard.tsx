import React from 'react';
import { motion } from 'framer-motion';
import ServiceIcon from './ServiceIcon';
import { ServiceIconName } from '../../types';
import { useLanguage } from '../../contexts';
import OptimizedImage from '../shared/OptimizedImage';

interface ServiceCardProps {
  serviceId: string;
  icon: ServiceIconName;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceId, icon }) => {
  const { t } = useLanguage();

  const title = t(`services.${serviceId}.title`);
  const description = t(`services.${serviceId}.description`);
  const features = [0, 1, 2].map((i) =>
    t(`services.${serviceId}.features.${i}`)
  );
  const price = t(`services.${serviceId}.price`);
  const button = t(`services.${serviceId}.button`);

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full rounded-xl overflow-hidden group shadow-xl border border-[#2c1250] bg-[#1a0b2e]">
        {/* Image container with OptimizedImage */}
        <div className="relative h-60 w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <OptimizedImage
              src={`/src/assets/ui/${serviceId}.webp`}
              alt={title}
              className="w-full h-full"
              objectFit="cover"
            />
          </motion.div>
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent opacity-60"></div>
          <span className="absolute top-3 left-3 bg-[#7127ba] text-white text-sm px-3 py-1 rounded-md shadow-sm font-medium">
            {price}
          </span>
        </div>

        {/* Card content */}
        <div className="p-6 flex flex-col h-full">
          {/* Title with improved icon container */}
          <div className="mb-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-lg flex items-center justify-center shadow-lg">
              <ServiceIcon name={icon} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-zinc-300 mb-5 text-sm">{description}</p>

          {/* Features with improved markers */}
          <ul className="text-sm text-zinc-200 space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 mr-3 bg-[#38126d] rounded-full flex-shrink-0">
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

          {/* CTA Button with hover effects */}
          <motion.button
            className="mt-auto w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#7127ba] to-[#4f228d] text-white font-medium shadow-md border border-[#693b93]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {button}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
