import Link from 'next/link';
import Section from '@/components/Section';
import { SERVICES } from '@/constants';

const Services = () => {
  return (
    <Section id="services" title="How I can help">
      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {SERVICES.map((s) => (
          <article key={s.title} className="grid gap-3 py-8 sm:grid-cols-[200px_1fr] sm:gap-8">
            <h3 className="text-[16px] font-semibold leading-[1.5] text-neutral-950">{s.title}</h3>
            <div className="space-y-3 max-w-[62ch]">
              <p className="text-[16px] leading-[1.6] text-neutral-950">{s.problem}</p>
              <p className="text-[15px] leading-[1.65] text-neutral-700">{s.offer}</p>
              <p className="text-[14px] leading-[1.6] text-neutral-600">
                <span className="font-medium text-neutral-800">Track record: </span>
                {s.proof}
              </p>
              {s.href && (
                <p className="text-[14px]">
                  <Link
                    href={s.href}
                    className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent-strong hover:decoration-accent-strong"
                  >
                    See what&apos;s included and pricing
                  </Link>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Services;
