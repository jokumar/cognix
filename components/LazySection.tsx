'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  animate?: boolean;
}

/**
 * LazySection component that implements Intersection Observer
 * to lazy load below-the-fold content with smooth animations
 */
export default function LazySection({ 
  children, 
  className = '',
  threshold = 0.1,
  animate = true,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '50px', // Start loading slightly before element enters viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  const animationClass = animate
    ? `transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`
    : '';

  return (
    <div 
      ref={sectionRef} 
      className={`${animationClass} ${className}`} 
      style={{ display: 'contents' }}
    >
      {children}
    </div>
  );
}
