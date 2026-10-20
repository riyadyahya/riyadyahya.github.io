import Image from 'next/image';
import avatar from '../assets/avatar.jpg';
import BookCallButton from '@/components/BookCallButton';
import { CLIENTS, CONTACT_INFO, EXPERIENCE, PERSONAL_INFO } from '@/constants';

const workedWith = [
  ...CLIENTS.map((c) => ({ name: c.name, website: c.website })),
  ...Object.values(EXPERIENCE)
    .filter((c) => !('featured' in c && c.featured))
    .map((c) => ({ name: c.company, website: c.website })),
];

const Hero = () => {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden ring-1 ring-neutral-200">
            <Image src={avatar} alt={`Portrait of ${PERSONAL_INFO.name}`} fill sizes="56px" className="object-cover" priority />
          </div>
          <div>
            <p className="text-[15px] font-medium text-neutral-950">{PERSONAL_INFO.name}</p>
            <p className="flex items-center gap-2 text-[13px] text-neutral-600">
              <span className="relative flex w-2 h-2" aria-hidden="true">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              {PERSONAL_INFO.availability}
            </p>
          </div>
        </div>

        <h1 className="max-w-[22ch] text-[34px] sm:text-[46px] leading-[1.1] tracking-tight font-semibold mb-6 text-neutral-950">
          {PERSONAL_INFO.tagline}
        </h1>

        <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.65] text-neutral-700 max-w-[62ch]">
          <p>
            I&apos;m a fractional CTO and hands-on senior engineer, ten years in. Right now I&apos;m building real-time voice agents
            with Instack AI, freight pricing software with BidSource, and a home-chef marketplace with Yalla Bites.
          </p>
          <p>
            Most recently I led full-stack and DevOps at DataQueue, shipping a conversational AI platform on Next.js,
            NestJS and GKE. Before that, I spent five years as lead engineer at Coretava.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <BookCallButton />
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-[15px] text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
          >
            or email me
          </a>
        </div>

        <div className="mt-16">
          <p className="text-[13px] text-neutral-600 mb-3">Clients and teams I&apos;ve worked with</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-neutral-950">
            {workedWith.map((c) => (
              <li key={c.name}>
                {c.website ? (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                  >
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
