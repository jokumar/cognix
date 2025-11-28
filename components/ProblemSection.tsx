import { ProblemSectionProps } from '@/types';

export default function ProblemSection({
  id,
  title,
  statistic,
  problems,
}: ProblemSectionProps) {
  return (
    <section id={id} className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-24 md:py-32 lg:py-40 isolate">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10 sm:mb-12 md:mb-16 px-2">
          {title}
        </h2>

        {/* Statistic Callout */}
        <div className="mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-[1.5rem] p-6 sm:p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            {statistic.icon && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl">{statistic.icon}</div>
              </div>
            )}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              {statistic.value}
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed px-2">
              {statistic.description}
            </p>
          </div>
        </div>

        {/* Problem Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-[1.5rem] p-10 hover:bg-white/15 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {problem.icon && (
                <div className="text-4xl mb-4">{problem.icon}</div>
              )}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {problem.title}
              </h3>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
