import { OutcomesSectionProps } from '@/types';

export default function OutcomesSection({ id, title, outcomes }: OutcomesSectionProps) {
  return (
    <section id={id} className="relative py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 isolate">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Real business value delivered through strategic modernization
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-[12px] rounded-[1.5rem] p-10 shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/80"
            >
              {/* Icon */}
              {outcome.icon && (
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mb-4 text-2xl">
                  {outcome.icon}
                </div>
              )}

              {/* Outcome Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {outcome.title}
              </h3>

              {/* Outcome Description (if provided) */}
              {outcome.description && (
                <p className="text-gray-600 text-base leading-relaxed">
                  {outcome.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
