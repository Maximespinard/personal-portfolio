import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
  critical?: boolean; // <- pour les images LCP (hero section)
  rounded?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

/**
 * A reusable component that optimizes image loading and rendering.
 * It applies best practices for performance and accessibility.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  className = '',
  priority = false,
  critical = false,
  rounded = false,
  objectFit = 'cover',
}) => {
  const loadingAttr = critical || priority ? 'eager' : 'lazy';
  const fetchPriorityAttr = critical || priority ? 'high' : 'auto';
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
