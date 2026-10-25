import Link from 'next/link';
import type { ReactNode } from 'react';
import BulletList from '@/components/BulletList';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Step from '@/components/Step';
import Topic from '@/components/Topic';
import { AUDIT_PRICE } from '@/constants';
import { faqPageJsonLd } from '@/structuredData';
import { pageMetadata } from '@/utils/metadata';

export const metadata = pageMetadata({
  title: 'AI-built MVP to production',
  description: 'Turn an AI-built MVP from Lovable, Bolt, v0, Replit or Cursor into a production app: a 48-hour fixed-price audit, then hardening or a move to code you own.',
  path: '/mvp-to-production/',
});

const faq = [
  {
    question: 'Who is this for?',
    answer: 'Founders and small teams who built an MVP with Lovable, Bolt, v0, Replit, Base44, Cursor, Windsurf or Claude Code and now need it to hold up: real users, real payments, investor due diligence, or a first engineering hire.',
  },
  {
    question: 'Do I have to rebuild from scratch?',
    answer: 'Usually not. Most AI-built MVPs have good screens and flows on weak foundations. I keep what works and rebuild what doesn’t, typically the data model, access rules, auth and payments. The audit tells you which parts are which before you commit to anything.',
  },
  {
    question: 'Do I need to be technical?',
    answer: 'No. The report opens with a plain-language summary of what’s at risk and what to do first. The technical detail is there for whoever does the fixing, human or AI.',
  },
  {
    question: 'Which stacks do you cover?',
    answer: 'The best fit is Next.js or React with Supabase or Postgres, hosted on Vercel, with Stripe for payments. I also cover Node.js, NestJS, Python, Redis, Firebase, AWS and GCP. If yours is different, ask on the call.',
  },
  {
    question: 'Will you change my code?',
    answer: 'Not during the audit. Access is read-only, and the fixes come as a list you own. If you want me to make them, that’s a hardening sprint or the move to production.',
  },
  {
    question: 'Can’t I just ask an AI to review it?',
    answer: 'You should, and I use AI in my reviews too. It catches a lot of line-level issues. It’s much weaker at seeing how the pieces fit together: a view that skips your access rules, a webhook that trusts the browser, a deploy with no way back. That’s where most of the serious problems are.',
  },
];

const toolLink = 'underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950';

type PackageProps = {
  name: string;
  price?: string;
  terms: string;
  summary: string;
  children: ReactNode;
};

const Package = ({ name, price, terms, summary, children }: PackageProps) => (
  <article className="grid gap-4 py-8 sm:grid-cols-[200px_1fr] sm:gap-8">
    <div>
      <h3 className="text-[16px] font-semibold leading-[1.5] text-neutral-950">{name}</h3>
      {price && <p className="mt-1 text-[24px] font-semibold tracking-tight text-neutral-950 tabular-nums">{price}</p>}
      <p className="mt-1 text-[13px] text-neutral-600">{terms}</p>
    </div>
    <div className="space-y-3 max-w-[62ch]">
      <p className="text-[16px] leading-[1.6] text-neutral-950">{summary}</p>
      <BulletList>{children}</BulletList>
    </div>
  </article>
);

export default function MvpToProductionPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faq)} />

      <PageHero
        current="MVP to production"
        title="Built your MVP with AI? Let’s turn it into a production app."
        linkHref="#packages"
        linkLabel="or see packages and pricing"
        footer={
          <div className="mt-16">
            <p className="text-[13px] text-neutral-600 mb-3">Works with apps built in</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-neutral-950">
              <li>
                <Link href="/lovable-to-production/" className={toolLink}>
                  Lovable
                </Link>
              </li>
              <li>
                <Link href="/bolt-to-production/" className={toolLink}>
                  Bolt
                </Link>
              </li>
              <li>
                <Link href="/v0-to-production/" className={toolLink}>
                  v0
                </Link>
              </li>
              <li>
                <Link href="/replit-to-production/" className={toolLink}>
                  Replit
                </Link>
              </li>
              <li>
                <Link href="/base44-to-production/" className={toolLink}>
                  Base44
                </Link>
              </li>
              <li>
                <Link href="/ai-codebase-audit/" className={toolLink}>
                  Cursor
                </Link>
              </li>
              <li>
                <Link href="/ai-codebase-audit/" className={toolLink}>
                  Windsurf
                </Link>
              </li>
              <li>
                <Link href="/ai-codebase-audit/" className={toolLink}>
                  Claude Code
                </Link>
              </li>
            </ul>
          </div>
        }
      >
        <p>
          Lovable, Bolt, v0, Replit and Cursor are a great way to prove an idea. They are much less careful about who
          can read your database, what happens when a Stripe webhook fails, or whether a second developer can change the
          code without breaking it.
        </p>
        <p>
          I’m a fractional CTO with ten years of shipping production systems, most recently on the same stack these
          tools generate: Next.js, Supabase, Vercel and Stripe. I work the way those tools do, with AI agents doing the
          heavy lifting while I make the calls. You get the audit in 48 hours, then I either harden what you have in days
          or move it to a production codebase your team owns, keeping the screens and flows your users already know.
        </p>
      </PageHero>

      <Section id="checks" title="What I check">
        <div className="grid gap-10 sm:grid-cols-2">
          <Topic title="Data and access">
            <BulletList>
              <li>Row-level security on every Supabase table, view and storage bucket</li>
              <li>Service and admin keys kept out of the browser</li>
              <li>Sign-up, login, password reset and session handling</li>
            </BulletList>
          </Topic>
          <Topic title="Payments">
            <BulletList>
              <li>Stripe webhooks verified, idempotent and safe to retry</li>
              <li>Failed payments, refunds and cancellations handled</li>
              <li>What a user can access always matches what they paid for</li>
            </BulletList>
          </Topic>
          <Topic title="Secrets and environments">
            <BulletList>
              <li>API keys in the client bundle or the git history</li>
              <li>Preview and production kept apart</li>
              <li>Rate limits on anything that calls a paid API, including your LLM</li>
            </BulletList>
          </Topic>
          <Topic title="Reliability">
            <BulletList>
              <li>Error monitoring, and logs you can actually search</li>
              <li>Database backups, and a restore that has been tested</li>
              <li>A way to roll back a bad deploy in minutes</li>
            </BulletList>
          </Topic>
          <Topic title="Performance and cost">
            <BulletList>
              <li>Slow queries, missing indexes, and repeated calls that belong in a Redis cache</li>
              <li>AI and hosting spend per user, and where it will spike</li>
              <li>What breaks first at ten times your current traffic</li>
            </BulletList>
          </Topic>
          <Topic title="Codebase health">
            <BulletList>
              <li>Whether a developer, or an AI agent, can change it safely</li>
              <li>Tests around the paths that touch money and user data</li>
              <li>Rules and CI checks that stop AI tools reintroducing the same bugs</li>
            </BulletList>
          </Topic>
        </div>
      </Section>

      <Section id="packages" title="Packages and pricing" aside="Prices in USD">
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          <Package
            name="Production audit"
            price={AUDIT_PRICE}
            terms="Fixed price, report in 48 hours"
            summary="Where your app stands, and a ranked list of what to fix first."
          >
            <li>Read-only review of your code, database, hosting and payments</li>
            <li>A written report with every issue ranked by risk, opening with a plain-language summary</li>
            <li>A clear call on whether to harden what you have or move to a production codebase</li>
            <li>Each fix written so you can paste it into Cursor or Claude Code, or hand it to a developer</li>
            <li>A 60-minute call to walk through the report</li>
          </Package>
          <Package
            name="Hardening sprint"
            terms="Fixed quote after the audit, usually 3 to 5 days"
            summary="Your app is basically sound. I fix what the audit found and set up the safety net."
          >
            <li>Every high-risk issue from the audit fixed and tested</li>
            <li>CI that runs checks on every pull request</li>
            <li>Error monitoring, backups with a tested restore, and a rollback path</li>
            <li>Handover notes for your team and for your AI tools</li>
          </Package>
          <Package
            name="MVP to production"
            terms="Fixed quote after the audit, usually 1 to 3 weeks"
            summary="Your MVP proved the idea, but it won’t carry the next stage. I move it to a codebase you own and can scale."
          >
            <li>Code in your own GitHub repo, with separate preview and production environments</li>
            <li>Data model, access rules, auth and payments rebuilt properly, with your existing data migrated</li>
            <li>The screens and flows your users already know, kept wherever they work</li>
            <li>Tests and CI on the paths that touch money and user data</li>
            <li>Docs and AI coding rules so your team, or your next hire, can keep building fast</li>
          </Package>
          <Package
            name="Fractional CTO"
            terms="Monthly, priced after a call based on scope"
            summary="Ongoing senior oversight while you keep building fast."
          >
            <li>Review of major changes before they ship</li>
            <li>A weekly call on architecture and priorities</li>
            <li>An AI coding setup your team can keep running</li>
            <li>Help hiring your first engineers when you’re ready</li>
          </Package>
        </div>
      </Section>

      <Section id="process" title="How it works">
        <ol className="grid gap-10 sm:grid-cols-2">
          <Step label="Step 1" title="Intro call">
            Thirty minutes. You show me the app and what’s coming up: a launch, a raise, your first paying users, your
            first hire. If an audit isn’t worth it yet, I’ll tell you.
          </Step>
          <Step label="Step 2" title="Access">
            You give me read-only access to the repo, the database and the hosting dashboard. I’m happy to sign your NDA
            first.
          </Step>
          <Step label="Step 3" title="Audit">
            Within 48 hours of access. AI agents sweep the code, the access rules and the payment flows, and I check
            every finding by hand, along with how the app actually runs in production.
          </Step>
          <Step label="Step 4" title="Report and next step">
            You get the written report and a 60-minute call to go through it. Then fix it yourself with your AI tools, or
            I send a fixed quote for a hardening sprint or the move to production.
          </Step>
        </ol>
      </Section>

      <FAQ items={faq} />
      <Contact />
    </>
  );
}
