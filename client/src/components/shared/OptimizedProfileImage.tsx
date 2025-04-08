// In OptimizedProfileImage.tsx
import React from 'react';
// Import the image directly
import meIcon from '../../assets/icons/rest/me-icon.webp';

interface OptimizedProfileImageProps {
  className?: string;
  alt?: string;
}

const OptimizedProfileImage: React.FC<OptimizedProfileImageProps> = ({
  className = '',
  alt = 'Maxime Spinard',
}) => {
  return (
    <img
      src={meIcon}
      alt={alt}
      width="180"
      height="180"
      className={`min-w-[180px] max-w-[180px] ${className}`}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      style={{ objectFit: 'cover' }}
    />
  );
};

export default OptimizedProfileImage;
