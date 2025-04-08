// src/components/shared/LazyLoadComponent.tsx
import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyProps {
  fallback?: React.ReactNode;
}

/**
 * A higher-order component that adds lazy loading to any component
 * @param importFunc - Dynamic import function for the component
 * @returns - Lazy loaded component
 */
export function lazyLoad<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>
) {
  const LazyComponent = lazy(importFunc);

  // Create a component that wraps the lazy-loaded component with Suspense
  const LazyLoadComponent = (props: P & LazyProps) => {
    const { fallback, ...componentProps } = props;

    const defaultFallback = (
      <div className="min-h-[100px] bg-[#1a0b2e] animate-pulse rounded-lg" />
    );

    return (
      <Suspense fallback={fallback || defaultFallback}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <LazyComponent {...componentProps} />
      </Suspense>
    );
  };

  return LazyLoadComponent;
}

export default lazyLoad;
