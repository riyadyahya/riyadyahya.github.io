import {CLIENTS, EXPERIENCE, formatDateRange, calculateDuration} from '@/constants';

export default function ExperienceTimeline() {
    const allPositions = Object.entries(EXPERIENCE).flatMap(([companyKey, companyData]) =>
        companyData.positions.map(position => ({
            ...position,
            company: companyData.company,
            website: companyData.website,
            location: companyData.location,
            featured: 'featured' in companyData ? companyData.featured : false,
            companyKey
        }))
    );

    const sortedPositions = allPositions.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.startDate.getTime() - a.startDate.getTime();
    });

    return (
        <section className="mb-10">
            <h2 className="text-[20px] font-semibold tracking-tight text-neutral-950 mb-5">
                Experience
            </h2>
            <div className="space-y-7">
                {sortedPositions.map((position, index) => {
                    const duration = calculateDuration(position.startDate, position.endDate);
                    return (
                        <div key={`${position.companyKey}-${index}`} className="break-inside-avoid-page">
                            <h3 className="text-[16px] font-semibold text-neutral-950">{position.title}</h3>
                            <p className="text-[13px] text-neutral-600 mb-2">
                                {position.website ? (
                                    <a
                                        href={position.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                                    >
                                        {position.company}
                                    </a>
                                ) : (
                                    <span className="font-medium text-neutral-800">{position.company}</span>
                                )}
                                {' · '}{formatDateRange(position.startDate, position.endDate)}
                                {duration && ` (${duration})`}
                            </p>
                            <ul className="list-disc marker:text-neutral-400 text-[14px] leading-[1.6] text-neutral-800 space-y-1 ml-4">
                                {position.achievements.map((achievement, achievementIndex) => (
                                    <li key={achievementIndex} className="pl-1.5">{achievement}</li>
                                ))}
                            </ul>
                            {position.featured && (
                                <div className="mt-4 ml-4 space-y-4">
                                    <h4 className="text-[14px] font-semibold text-neutral-950">Selected clients</h4>
                                    {CLIENTS.map(client => (
                                        <div key={client.name}>
                                            <p className="text-[14px] text-neutral-800">
                                                {client.website ? (
                                                    <a
                                                        href={client.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                                                    >
                                                        {client.name}
                                                    </a>
                                                ) : (
                                                    <span className="font-medium">{client.name}</span>
                                                )}
                                                {client.legalName && <span className="text-neutral-600"> ({client.legalName})</span>}
                                                <span className="text-neutral-600">, {client.role}</span>
                                            </p>
                                            <ul className="mt-1 list-disc marker:text-neutral-400 text-[14px] leading-[1.6] text-neutral-800 space-y-1 ml-4">
                                                {client.achievements.map(achievement => (
                                                    <li key={achievement} className="pl-1.5">{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
