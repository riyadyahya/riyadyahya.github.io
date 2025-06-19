import { EXPERIENCE, formatDateRange, calculateDuration } from '@/constants';

const Experience = () => {
  // Flatten all positions from all companies into a single array
  const allPositions = Object.entries(EXPERIENCE).flatMap(([companyKey, companyData]) =>
    companyData.positions.map(position => ({
      ...position,
      company: companyData.company,
      location: companyData.location,
      companyKey
    }))
  );

  // Sort positions by start date (most recent first)
  const sortedPositions = allPositions.sort((a, b) => {
    return b.startDate.getTime() - a.startDate.getTime();
  });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {sortedPositions.map((position, index) => (
            <div
              key={`${position.companyKey}-${index}`}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {position.title}
                  </h3>
                  <p className="text-lg text-blue-600">
                    {position.company}
                  </p>
                  <p className="text-gray-600">
                    {position.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-gray-600">
                    {formatDateRange(position.startDate, position.endDate)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {calculateDuration(position.startDate, position.endDate)}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {position.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm md:text-base">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
