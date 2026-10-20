import { EDUCATION, formatDateRange } from '@/constants';

export default function EducationSection() {
  return (
    <section className="break-inside-avoid-page">
      <h2 className="text-[20px] font-semibold tracking-tight text-neutral-950 mb-5">
        Education
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-x-6">
        <h3 className="text-[16px] font-semibold text-neutral-950">{EDUCATION.degree}</h3>
        <p className="text-[13px] text-neutral-600">
          {formatDateRange(EDUCATION.startDate, EDUCATION.endDate)}
        </p>
      </div>
      <p className="text-[14px] text-neutral-700">{EDUCATION.university}</p>
    </section>
  );
}
