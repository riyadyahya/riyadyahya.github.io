import {EXPERIENCE, formatDateRange, calculateDuration} from '@/constants';

export default function ExperienceTimeline() {
    // Flatten all positions from all companies into a single array
    const allPositions = Object.entries(EXPERIENCE).flatMap(([companyKey, companyData]) =>
        companyData.positions.map(position => ({
            ...position,
            company: companyData.company,
            website: companyData.website,
            location: companyData.location,
            companyKey
        }))
    );

    // Sort positions by start date (most recent first)
    const sortedPositions = allPositions.sort((a, b) => {
        return b.startDate.getTime() - a.startDate.getTime();
    });

    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Experience
            </h2>
            <div>
                {
                    sortedPositions.map((position, index) => (
                        <div key={`${position.companyKey}-${index}`} className="mb-6">
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                                    <div>
                                        <span className="font-semibold">{position.title}</span>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 mb-2">
                                    {position.company} • {formatDateRange(position.startDate, position.endDate)} ({calculateDuration(position.startDate, position.endDate)})
                                </div>
                                <ul className="list-disc text-sm space-y-1 ml-4">
                                    {position.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex} className="pl-2">{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
