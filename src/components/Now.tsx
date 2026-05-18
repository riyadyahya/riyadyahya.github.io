import { EXPERIENCE } from '@/constants';

const CURRENT = {
  company: EXPERIENCE.dataqueue.company,
  website: EXPERIENCE.dataqueue.website,
  role: 'Senior Full-Stack & DevOps Engineer · Full-time',
  blurb:
    'Building a conversational AI platform end-to-end on Next.js + NestJS + MongoDB, deployed on GCP GKE. Stripe billing, WhatsApp messaging, and SIP telephony via LiveKit / Asterisk / Vital PBX.',
};

const Now = () => {
  return (
    <section id="now" className="py-20 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-neutral-950">
            What I&apos;m working on
          </h2>
          <span className="text-[13px] text-neutral-500">Updated continuously</span>
        </div>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
            {CURRENT.website ? (
              <a
                href={CURRENT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
              >
                {CURRENT.company}
              </a>
            ) : (
              <span className="text-[16px] font-medium text-neutral-950">{CURRENT.company}</span>
            )}
            <span className="text-[14px] text-neutral-500">{CURRENT.role}</span>
          </div>
          <p className="text-[15px] leading-[1.65] text-neutral-700 max-w-[62ch]">{CURRENT.blurb}</p>
        </div>
      </div>
    </section>
  );
};

export default Now;
