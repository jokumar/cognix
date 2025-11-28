import React from 'react';
import { SolutionSectionProps } from '@/types';

export default function SolutionSection({
  id,
  title,
  description,
  modules,
}: SolutionSectionProps) {
  return (
    <section id={id} className="relative py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-white isolate">
      <div className="max-w-7xl mx-auto">
        {/* Section Title and Description */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {description}
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-[12px] border border-gray-200/80 rounded-[1.5rem] p-10 shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{module.icon}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {module.title}
              </h3>

              {/* Description */}
              {module.description && (
                <p className="text-gray-600 text-base leading-relaxed">
                  {module.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
