'use client';

import { BottomCTASectionProps } from '@/types';
import { handleAnchorClick } from '@/utils';

export default function BottomCTASection({
  id,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  contactEmail,
}: BottomCTASectionProps) {
  return (
    <section id={id} className="relative py-24 md:py-32 lg:py-40 overflow-hidden isolate">
      {/* Background with gradient and glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        {/* Decorative gradient orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-[80px] opacity-30" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-[80px] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[80px] opacity-30" />
      </div>

      {/* Content with glassmorphism container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-[1.5rem] p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-8 max-w-2xl mx-auto">
            <a
              href={primaryCTA.href}
              onClick={(e) => {
                handleAnchorClick(e);
                primaryCTA.onClick?.();
              }}
              className="w-full sm:w-auto sm:flex-1 sm:max-w-xs px-8 py-4 bg-white hover:bg-gray-50 active:bg-gray-100 text-blue-600 font-semibold rounded-[0.75rem] shadow-xl hover:shadow-2xl transition-all duration-250 text-center min-h-[56px] flex items-center justify-center transform hover:scale-[1.03] touch-manipulation"
            >
              {primaryCTA.text}
            </a>
            
            <a
              href={secondaryCTA.href}
              onClick={(e) => {
                handleAnchorClick(e);
                secondaryCTA.onClick?.();
              }}
              className="w-full sm:w-auto sm:flex-1 sm:max-w-xs px-8 py-4 bg-transparent hover:bg-white/10 active:bg-white/20 text-white font-semibold rounded-[0.75rem] border-2 border-white shadow-lg hover:shadow-xl transition-all duration-250 text-center min-h-[56px] flex items-center justify-center touch-manipulation"
            >
              {secondaryCTA.text}
            </a>
          </div>

          {/* Email contact option */}
          {contactEmail && (
            <div className="mt-6">
              <p className="text-white/80 text-sm mb-2">Or email us directly:</p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-white font-semibold text-base sm:text-lg hover:text-white/90 transition-colors underline decoration-2 underline-offset-4 break-all"
              >
                {contactEmail}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
