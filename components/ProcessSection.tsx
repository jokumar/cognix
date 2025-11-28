import { ProcessSectionProps } from '@/types';

export default function ProcessSection({ id, title, steps }: ProcessSectionProps) {
  return (
    <section id={id} className="relative py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-white isolate">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {title}
          </h2>
        </div>

        {/* Process Steps - Timeline Format */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line - Hidden on mobile, shown on desktop between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-blue-400 to-blue-200 z-0" />
                )}

                {/* Step Card */}
                <div className="relative bg-white/90 backdrop-blur-[12px] rounded-[1.5rem] p-10 shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/80 h-full">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg mb-4 shadow-lg">
                    {step.stepNumber}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline Connector */}
          <div className="sm:hidden mt-6 flex justify-center">
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="w-8 h-1 bg-blue-400 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
