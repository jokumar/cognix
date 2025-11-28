import { DifferentiatorsSectionProps } from '@/types';

export default function DifferentiatorsSection({ 
  id,
  title, 
  differentiators, 
  expertProfiles 
}: DifferentiatorsSectionProps) {
  return (
    <section id={id} className="relative py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 isolate">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience, speed, and expertise that sets us apart
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 sm:mb-12">
          {differentiators.map((differentiator, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-[12px] rounded-[1.5rem] p-10 shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/80"
            >
              {/* Icon */}
              {differentiator.icon && (
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mb-4 text-2xl">
                  {differentiator.icon}
                </div>
              )}

              {/* Differentiator Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {differentiator.title}
              </h3>

              {/* Differentiator Description (if provided) */}
              {differentiator.description && (
                <p className="text-gray-600 text-base leading-relaxed">
                  {differentiator.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Expert Profiles (Optional) */}
        {expertProfiles && expertProfiles.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 px-2">
              Meet Our Experts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {expertProfiles.map((expert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  {/* Expert Photo */}
                  {expert.photo && (
                    <div className="mb-4">
                      <img
                        src={expert.photo}
                        alt={expert.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-indigo-100"
                      />
                    </div>
                  )}

                  {/* Expert Name */}
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-1">
                    {expert.name}
                  </h4>

                  {/* Expert Role */}
                  <p className="text-indigo-600 font-medium text-center mb-3 text-sm sm:text-base">
                    {expert.role}
                  </p>

                  {/* Expert Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {expert.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
