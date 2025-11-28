import { DeliverablesSectionProps } from '@/types';

export default function DeliverablesSection({
  id,
  title,
  deliverables,
}: DeliverablesSectionProps) {
  return (
    <section id={id} className="relative py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 isolate">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {title}
          </h2>
        </div>

        {/* Deliverables Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-[12px] rounded-[1.5rem] p-10 shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/80"
            >
              <div className="flex items-start gap-4">
                {/* Icon/Checkmark */}
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    {deliverable.icon ? (
                      <span className="text-2xl">{deliverable.icon}</span>
                    ) : (
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {deliverable.title}
                  </h3>
                  {deliverable.description && (
                    <p className="text-gray-600 text-base leading-relaxed">
                      {deliverable.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
