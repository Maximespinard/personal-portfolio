// src/components/shared/ProfileImage.tsx
import React from 'react';
import OptimizedImage from '../shared/OptimizedImage';
import useBreakPoint from '../../hooks/useBreakPoint';

// Import all avatar sizes
import avatarSmall from '../../assets/icons/rest/avatar/avatar-small.webp';
import avatarMedium from '../../assets/icons/rest/avatar/avatar-medium.webp';
import avatarLarge from '../../assets/icons/rest/avatar/avatar-large.webp';

interface ProfileImageProps {
  className?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  useResponsive?: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  className = '',
  alt = 'Maxime Spinard',
  size = 'medium',
  useResponsive = false,
}) => {
  const { isMobile, isMinTablet } = useBreakPoint();

  // Image source and dimensions based on size prop or responsive breakpoints
  const getImageDetails = () => {
    if (useResponsive) {
      if (isMobile) return { src: avatarSmall, width: 120, height: 120 };
      if (isMinTablet) return { src: avatarMedium, width: 180, height: 180 };
      return { src: avatarLarge, width: 250, height: 250 };
    }

    // Non-responsive mode using the size prop
    const sizeMap = {
      small: { src: avatarSmall, width: 120, height: 120 },
      medium: { src: avatarMedium, width: 180, height: 180 },
      large: { src: avatarLarge, width: 250, height: 250 },
    };

    return sizeMap[size];
  };

  const { src, width, height } = getImageDetails();

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={true}
      rounded={true}
    />
  );
};

export default ProfileImage;
