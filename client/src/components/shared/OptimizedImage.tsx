// src/components/shared/OptimizedImage.tsx
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
  rounded?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

/**
 * A reusable component that optimizes image loading and rendering
 * It applies best practices for performance and accessibility
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  className = '',
  priority = false,
  rounded = false,
  objectFit = 'cover',
}) => {
  // Determine if this is a critical image that should be prioritized
  const loadingAttr = priority ? 'eager' : 'lazy';
  const fetchPriorityAttr = priority ? 'high' : 'auto';

  // Add rounded corners if requested
  const roundedClass = rounded ? 'rounded-[9999px]' : '';

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${roundedClass} ${className}`}
      loading={loadingAttr}
      fetchPriority={fetchPriorityAttr}
      decoding="async"
      style={{ objectFit }}
    />
  );
};

export default OptimizedImage;
