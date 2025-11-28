'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  stagger?: 1 | 2 | 3;
}

/**
 * ScrollAnimation component that animates elements when they enter the viewport
 * Uses CSS keyframe animations defined in globals.css
 */
export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  stagger,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before showing
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Stop observing once visible
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  // Animation classes based on type - using CSS keyframe animations
  const animationClasses = {
    'fade-up': 'animate-on-scroll',
    'fade-in': 'animate-fade-in',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
  };

  // Stagger delay class
  const staggerClass = stagger ? `stagger-${stagger}` : '';

  // Initial state - hidden until animation triggers
  const initialState = isVisible ? '' : 'opacity-0';

  return (
    <div
      ref={elementRef}
      className={`${initialState} ${isVisible ? animationClasses[animation] : ''} ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
}
