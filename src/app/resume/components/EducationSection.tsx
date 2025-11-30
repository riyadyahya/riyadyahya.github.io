import { EDUCATION, formatDateRange } from '@/constants';

export default function EducationSection() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Education
      </h2>
      <div className="mb-2">
        <div className="flex justify-between items-center">
          <div className="font-semibold">{EDUCATION.degree}</div>
          <div className="text-sm text-gray-500">
            {formatDateRange(EDUCATION.startDate, EDUCATION.endDate)}
          </div>
        </div>
        <div className="text-sm text-gray-700">{EDUCATION.university}</div>
      </div>
    </section>
  );
}
