import AuditCallToAction from '@/components/AuditCallToAction';
import Definition from '@/components/Definition';
import FAQ from '@/components/FAQ';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Step from '@/components/Step';
import Topic from '@/components/Topic';
import { faqPageJsonLd } from '@/structuredData';
import { pageMetadata } from '@/utils/metadata';

export const metadata = pageMetadata({
  title: 'Lovable to production',
  description: 'Built your app with Lovable? A senior engineer audits it in 48 hours, then hardens it or moves it to a codebase and Supabase project you own.',
  path: '/lovable-to-production/',
});

const faq = [
  {
    question: 'Can I keep using Lovable after you’ve worked on it?',
    answer: 'Yes, and most founders should, at least for UI work. I set up project knowledge and a GitHub workflow so Lovable builds on the fixes instead of undoing them, and so it’s clear which changes go through prompts and which go through code review.',
  },
  {
    question: 'My app runs on Lovable Cloud. Can it move to my own Supabase account?',
    answer: 'Yes. It means moving your tables, user accounts, storage files and edge functions to a project you control. Depending on how the export is done, users may need to reset their passwords, so I plan the move with you before anything changes.',
  },
  {
    question: 'Isn’t Lovable’s built-in security scan enough?',
    answer: 'It catches common issues, and you should run it. An audit goes further: how your payments, auth, data and deploys fit together, and what happens when something fails.',
  },
  {
    question: 'Why isn’t my Lovable app showing up on Google?',
    answer: 'If it was created before May 2026, it’s probably a single-page app that renders in the browser. Submit a sitemap and check Search Console first. If key pages still aren’t indexed, the fix is server rendering, through Lovable’s upgrade or a move to Next.js.',
  },
];

export default function LovableToProductionPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faq)} />

      <PageHero
        trail={[{ name: 'MVP to production', href: '/mvp-to-production/' }]}
        current="Lovable to production"
        title="Built your app with Lovable? Let’s make it production-ready."
        linkHref="/mvp-to-production/#packages"
        linkLabel="or see packages and pricing"
      >
        <p>
          Lovable is one of the fastest ways to get from an idea to a working app. The hard part comes next: real
          users, real payments, and a codebase that has to survive more than one person changing it.
        </p>
        <p>
          I’m a fractional CTO who works on the same stack Lovable generates, React, TypeScript and Supabase, every
          day. I audit your Lovable app in 48 hours and tell you exactly what to fix, whether to stay on Lovable, and
          when it’s time to move.
        </p>
      </PageHero>

      <Section id="stack" title="What Lovable gives you">
        <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
          <Definition term="Front end">
            React, TypeScript and Tailwind. Older projects are single-page apps built with Vite. Projects started since
            May 2026 use TanStack Start, which renders pages on the server.
          </Definition>
          <Definition term="Back end">
            Supabase: Postgres, auth, file storage and edge functions. Either Lovable Cloud, which Lovable manages for
            you, or a Supabase project in your own account.
          </Definition>
          <Definition term="Hosting">
            Lovable’s own hosting by default. The code can be synced to GitHub and deployed anywhere.
          </Definition>
          <Definition term="Left to you">
            Database access rules, payment edge cases, tests, monitoring, backups, and a way for a team to change the
            code without breaking it.
          </Definition>
        </dl>
      </Section>

      <Section id="problems" title="Where Lovable apps break">
        <div className="grid gap-10 sm:grid-cols-2">
          <Topic title="Database rules left open">
            Your Supabase key is public by design, so row-level security is the only thing stopping a stranger from
            reading your tables. In 2025 a researcher scanned 1,645 apps from Lovable’s showcase and found about 1 in
            10 with data anyone could read or write.
          </Topic>
          <Topic title="Secrets in the browser">
            Anything in a VITE_ environment variable ships to every visitor’s browser. Keys for OpenAI, Stripe or your
            email provider belong in an edge function, never in the front end.
          </Topic>
          <Topic title="Stripe webhooks that don’t verify">
            Stripe signs every webhook, and checking that signature needs the raw request body. Generated edge
            functions often parse the JSON first, so the check fails or gets skipped, and anyone can fake a payment
            event.
          </Topic>
          <Topic title="Fixes that break other things">
            A prompt can rewrite files you never mentioned. Without tests, a fix to checkout can quietly break sign-up,
            and you hear about it from a user.
          </Topic>
          <Topic title="Hard for Google to read">
            Older Lovable projects render in the browser, which makes search engines work harder to see your content.
            Server rendering fixes it, but the upgrade changes your app’s framework, so test it before you publish.
          </Topic>
          <Topic title="Locked into Lovable Cloud">
            Lovable Cloud is convenient until you need direct database access, your own backups, or a staging
            environment. Moving to your own Supabase project means carrying over tables, user accounts, files and
            functions, and it needs a plan so users don’t notice.
          </Topic>
        </div>
      </Section>

      <Section id="paths" title="Three ways forward" aside="The audit tells you which one fits">
        <ol className="grid gap-10 md:grid-cols-3">
          <Step
            label="Option 1"
            title="Harden it on Lovable"
            note="Best when the app is simple and Lovable still makes you faster."
          >
            Lock down the database rules, move secrets server-side, fix the payment flow, and add monitoring and
            backups. You keep prompting in Lovable, with project knowledge that stops it undoing the fixes.
          </Step>
          <Step
            label="Option 2"
            title="Own the infrastructure"
            note="Best when you have paying users and want a safety net."
          >
            Code in your GitHub, your own Supabase project, a staging environment, and CI with tests on the paths that
            touch money. Lovable stays useful for screens; the risky parts go through code review.
          </Step>
          <Step
            label="Option 3"
            title="Move to a production codebase"
            note="Best when you’re hiring engineers, raising, or need what Lovable struggles with."
          >
            Next.js or TanStack Start on your own Supabase, with the data model, auth and payments rebuilt properly and
            your data and users migrated. The screens your users know stay wherever they work.
          </Step>
        </ol>
      </Section>

      <FAQ items={faq} />
      <AuditCallToAction subject="your Lovable app" />
    </>
  );
}
