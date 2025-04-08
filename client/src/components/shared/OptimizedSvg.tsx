// src/components/shared/OptimizedSvg.tsx
import React from 'react';

interface OptimizedSvgProps {
  src: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  role?: string;
  ariaLabel?: string;
}

/**
 * A component that optimizes SVG loading and rendering
 * This helps with the large SVG files identified in the Lighthouse report
 */
export const OptimizedSvg: React.FC<OptimizedSvgProps> = ({
  src: SvgComponent,
  className = '',
  width = 24,
  height = 24,
  alt,
  role = 'img',
  ariaLabel,
}) => {
  return (
    <SvgComponent
      className={className}
      width={width}
      height={height}
      role={role}
      aria-label={ariaLabel || alt}
    />
  );
};

export default OptimizedSvg;
