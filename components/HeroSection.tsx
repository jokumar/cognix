'use client';

import Image from 'next/image';
import { HeroSectionProps } from '@/types';
import { handleAnchorClick } from '@/utils';

export default function HeroSection({
  id = 'hero',
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section id={id} className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden isolate pt-16 sm:pt-20">
      {/* Background gradient with enhanced glassmorphism orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 pointer-events-none">
        {/* Optional background image overlay - optimized with Next.js Image */}
        {backgroundImage && (
          <div className="absolute inset-0 opacity-10">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              priority
              quality={75}
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        )}
        
        {/* Multiple layered gradient orbs with 80px blur and 0.3 opacity */}
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full pointer-events-none"
          style={{ filter: 'blur(80px)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/30 rounded-full pointer-events-none"
          style={{ filter: 'blur(80px)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/30 dark:bg-indigo-600/30 rounded-full pointer-events-none"
          style={{ filter: 'blur(80px)' }}
        />
        <div 
          className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-400/30 dark:bg-cyan-600/30 rounded-full pointer-events-none"
          style={{ filter: 'blur(80px)' }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-72 h-72 bg-pink-400/30 dark:bg-pink-600/30 rounded-full pointer-events-none"
          style={{ filter: 'blur(80px)' }}
        />
      </div>

      {/* Content with glassmorphism effect */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        {/* Glassmorphism container for content */}
        <div 
          className="backdrop-blur-[12px] bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 shadow-2xl"
          style={{ 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          <h1 
            className="font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              textWrap: 'balance'
            }}
          >
            {headline}
          </h1>
          
          <p 
            className="text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto px-4"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.7,
              letterSpacing: 0,
              textWrap: 'pretty'
            }}
          >
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto px-4">
            <a
              href={primaryCTA.href}
              onClick={(e) => {
                handleAnchorClick(e);
                primaryCTA.onClick?.();
              }}
              className="w-full sm:w-auto sm:flex-1 sm:max-w-xs px-6 sm:px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center min-h-[56px] flex items-center justify-center touch-manipulation"
            >
              {primaryCTA.text}
            </a>
            
            <a
              href={secondaryCTA.href}
              onClick={(e) => {
                handleAnchorClick(e);
                secondaryCTA.onClick?.();
              }}
              className="w-full sm:w-auto sm:flex-1 sm:max-w-xs px-6 sm:px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-400 shadow-md hover:shadow-lg transition-all duration-200 text-center min-h-[56px] flex items-center justify-center touch-manipulation"
            >
              {secondaryCTA.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
