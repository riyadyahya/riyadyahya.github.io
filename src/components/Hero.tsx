import Image from 'next/image';
import profile from '../assets/profile.jpg';
import { CONTACT_INFO, PERSONAL_INFO } from '@/constants';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-1 ring-neutral-200">
            <Image src={profile} alt={PERSONAL_INFO.name} fill className="object-cover" priority />
          </div>
          <div className="flex items-center gap-2 text-[13px] text-neutral-500">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            Available for senior &amp; lead engineering work
          </div>
        </div>

        <h1 className="text-[34px] sm:text-[44px] leading-[1.12] tracking-tight font-semibold mb-6 text-neutral-950">
          Senior and{' '}
          <span className="text-neutral-400">lead software engineer</span>,
          ten years in.
        </h1>

        <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.65] text-neutral-700 max-w-[62ch]">
          <p>
            I&apos;m currently full-time at{' '}
            <a
              href="https://www.dataqueue.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
            >
              DataQueue
            </a>
            , building a conversational AI platform on Next.js, NestJS, and GKE — Stripe billing, WhatsApp
            messaging, and SIP telephony via LiveKit and Asterisk.
          </p>
          <p>
            Full-stack on Next.js / NestJS with multi-cloud DevOps across AWS, GCP, and Vercel. My delivery is
            accelerated by Claude Code, Cursor, and a stack of custom subagents I&apos;ve tuned over the past year.
            Before this I was Lead Software Engineer at Coretava for ~5 years.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-950 text-white hover:bg-neutral-800 transition-colors"
          >
            Get in touch
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
