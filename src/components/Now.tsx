import { EXPERIENCE } from '@/constants';

type Engagement = {
  company: string;
  website?: string;
  role: string;
  blurb: string;
  primary?: boolean;
};

const ENGAGEMENTS: Engagement[] = [
  {
    company: EXPERIENCE.dataqueue.company,
    website: EXPERIENCE.dataqueue.website,
    role: 'Senior Full-Stack & DevOps Engineer · Full-time',
    blurb:
      'Building a conversational AI platform end-to-end on Next.js + NestJS + MongoDB, deployed on GCP GKE. Stripe billing, WhatsApp messaging, and SIP telephony via LiveKit / Asterisk / Vital PBX.',
    primary: true,
  },
  {
    company: EXPERIENCE.instack.company,
    website: EXPERIENCE.instack.website,
    role: 'Fractional CTO',
    blurb:
      'Leading a four-engineer team building a multi-tenant voice agent SaaS on Next.js + Supabase + Vercel, with LiveKit voice agents on AWS ECS and Deepgram / ElevenLabs / OpenAI in the loop.',
  },
  {
    company: EXPERIENCE.yallabites.company,
    website: EXPERIENCE.yallabites.website,
    role: 'Backend & DevOps Engineer · Part-time',
    blurb:
      'Backend services for a US home-chef marketplace on Next.js + Payload CMS + Supabase. Stripe payments, Nash for delivery, Shippo for shipping, GitHub Actions and Sentry on the ops side.',
  },
  {
    company: EXPERIENCE.bidsource.company,
    website: EXPERIENCE.bidsource.website,
    role: 'Full-Stack Engineer · Part-time',
    blurb:
      'Logistics rate management platform on Next.js + Supabase + Vercel. Shipped Opportunities — multi-rate sourcing and batch carrier outreach — alongside AWS Lambda for allocation and Terraform for infra.',
  },
];

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

        <ul className="divide-y divide-neutral-200">
          {ENGAGEMENTS.map((eng) => (
            <li key={eng.company} className="py-6 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                {eng.website ? (
                  <a
                    href={eng.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                  >
                    {eng.company}
                  </a>
                ) : (
                  <span className="text-[16px] font-medium text-neutral-950">{eng.company}</span>
                )}
                {eng.primary && (
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500">Primary</span>
                )}
                <span className="text-[14px] text-neutral-500">{eng.role}</span>
              </div>
              <p className="text-[15px] leading-[1.65] text-neutral-700 max-w-[62ch]">{eng.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Now;
