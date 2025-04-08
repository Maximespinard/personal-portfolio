// src/components/shared/ProfileImage.tsx
import React from 'react';
import OptimizedImage from '../shared/OptimizedImage';
import meIcon from '../../assets/icons/rest/me-icon.webp';

interface ProfileImageProps {
  className?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Profile image component that uses the OptimizedImage component with
 * appropriate settings for the profile image
 */
const ProfileImage: React.FC<ProfileImageProps> = ({
  className = '',
  alt = 'Maxime Spinard',
  size = 'medium',
}) => {
  // Size mapping for different profile image sizes
  const sizeMap = {
    small: {
      width: 120,
      height: 120,
      className: 'min-w-[120px] max-w-[120px]',
    },
    medium: {
      width: 180,
      height: 180,
      className: 'min-w-[180px] max-w-[180px]',
    },
    large: {
      width: 250,
      height: 250,
      className: 'min-w-[250px] max-w-[250px]',
    },
  };

  const { width, height, className: sizeClassName } = sizeMap[size];

  return (
    <OptimizedImage
      src={meIcon}
      alt={alt}
      width={width}
      height={height}
      className={`${sizeClassName} ${className}`}
      priority={true}
      rounded={true}
    />
  );
};

export default ProfileImage;
