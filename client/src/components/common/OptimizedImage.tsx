import React, { useState, useEffect } from 'react';

interface ImageSourceProps {
  src: string;
  type: string;
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sources?: ImageSourceProps[];
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  sources = [],
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  const placeholderStyle = {
    backgroundColor: '#20113a', // Dark purple placeholder
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
  };

  if (error) {
    return (
      <div
        style={placeholderStyle}
        className={`${className} flex items-center justify-center`}
      >
        <span className="text-gray-400">Image not available</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Show placeholder until image is loaded */}
      {!isLoaded && (
        <div
          style={placeholderStyle}
          className={`${className} absolute inset-0 animate-pulse`}
        ></div>
      )}

      {/* The image with format options */}
      <picture>
        {/* Add AVIF sources first (best compression) */}
        {sources
          .filter((source) => source.type === 'image/avif')
          .map((source, index) => (
            <source
              key={`avif-${index}`}
              srcSet={source.src}
              type="image/avif"
            />
          ))}

        {/* Add WebP sources next */}
        {sources
          .filter((source) => source.type === 'image/webp')
          .map((source, index) => (
            <source
              key={`webp-${index}`}
              srcSet={source.src}
              type="image/webp"
            />
          ))}

        {/* Add any other format sources */}
        {sources
          .filter(
            (source) => !['image/webp', 'image/avif'].includes(source.type)
          )
          .map((source, index) => (
            <source
              key={`other-${index}`}
              srcSet={source.src}
              type={source.type}
            />
          ))}

        {/* Fallback image */}
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          width={width}
          height={height}
          loading="eager"
          fetchpriority="high"
          style={{
            aspectRatio: width && height ? `${width}/${height}` : 'auto',
          }}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
