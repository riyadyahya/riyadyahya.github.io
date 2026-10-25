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
  title: 'v0 to production',
  description: 'Built your app with v0 by Vercel? A senior engineer audits it in 48 hours, then secures the back end and gets it ready for real users.',
  path: '/v0-to-production/',
});

const faq = [
  {
    question: 'Is the code v0 generates production-ready?',
    answer: 'The UI is usually close. The parts to check are the ones users can’t see: server actions, auth, database access and configuration. That’s where the audit spends its time.',
  },
  {
    question: 'Can I keep using v0?',
    answer: 'Yes. With the code in GitHub and a review step, v0 is a great way to build new screens. I set it up so its changes go through the same checks as any developer’s.',
  },
  {
    question: 'Do I have to stay on Vercel?',
    answer: 'No, but there’s rarely a reason to leave early. A Next.js app runs on other hosts too, and I’ll tell you if your traffic or costs make a move worth it.',
  },
];

export default function V0ToProductionPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faq)} />

      <PageHero
        trail={[{ name: 'MVP to production', href: '/mvp-to-production/' }]}
        current="v0 to production"
        title="Built your app with v0? Let’s make the back end as good as the UI."
        linkHref="/mvp-to-production/#packages"
        linkLabel="or see packages and pricing"
      >
        <p>
          v0 builds some of the best-looking interfaces of any AI tool, on Next.js, the same framework serious teams
          ship with. The risk sits behind the UI: server actions, auth and data access that nobody has really checked.
        </p>
        <p>
          I’m a fractional CTO who ships Next.js on Vercel in production every day. I audit your v0 app in 48 hours and
          tell you exactly what to fix before real users and real money arrive.
        </p>
      </PageHero>

      <Section id="stack" title="What v0 gives you">
        <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
          <Definition term="Front end">
            Next.js with the App Router, React, Tailwind and shadcn/ui. This is v0’s strongest part.
          </Definition>
          <Definition term="Back end">
            API routes and server actions in the same Next.js app, with a database such as Supabase or Neon connected
            through Vercel.
          </Definition>
          <Definition term="Hosting">
            Vercel, one click from v0, with a preview deployment for every change. The code can live in your own
            GitHub.
          </Definition>
          <Definition term="Left to you">
            Auth checks inside every server action, real configuration instead of placeholders, database rules, payment
            edge cases, tests and monitoring.
          </Definition>
        </dl>
      </Section>

      <Section id="problems" title="Where v0 apps break">
        <div className="grid gap-10 sm:grid-cols-2">
          <Topic title="Server actions anyone can call">
            Every server action is a public endpoint under the hood. If it doesn’t check who’s calling and validate what
            they sent, anyone can call it directly and skip your UI entirely.
          </Topic>
          <Topic title="Placeholders that never got replaced">
            v0 wires things up with placeholder environment variables, sample data and callbacks pointing at localhost.
            They look fine in the preview and fail, or half work, in production.
          </Topic>
          <Topic title="Secrets in NEXT_PUBLIC_ variables">
            Anything prefixed NEXT_PUBLIC_ is baked into the JavaScript every visitor downloads. Keys for Stripe, OpenAI
            or your database belong on the server only.
          </Topic>
          <Topic title="Login that breaks on previews">
            Each Vercel preview gets its own URL, and sign-in providers reject callbacks they don’t recognize. Teams end
            up testing login only in production.
          </Topic>
          <Topic title="A polished front end on a thin back end">
            v0 shines at UI. The data model, access rules and payment logic behind it are usually the least reviewed
            part of the app, and the part that hurts most when it fails.
          </Topic>
        </div>
      </Section>

      <Section id="paths" title="Three ways forward" aside="The audit tells you which one fits">
        <ol className="grid gap-10 md:grid-cols-3">
          <Step
            label="Option 1"
            title="Harden it in place"
            note="Best when the app is small and v0 still speeds you up."
          >
            Add auth checks and validation to every server action, replace placeholders with real configuration, lock
            down the database, and add monitoring. Keep generating UI with v0 on top of that.
          </Step>
          <Step
            label="Option 2"
            title="Own the workflow"
            note="Best when you have paying users or a second developer."
          >
            Code in your GitHub with preview deployments, a staging database, CI with tests, and code review on
            everything v0 produces. v0 becomes a UI tool inside a normal engineering workflow.
          </Step>
          <Step
            label="Option 3"
            title="Build out the back end"
            note="Best when the product needs real business logic, integrations or scale."
          >
            Keep the v0 front end and build a proper back end behind it: data model, auth, payments, background jobs and
            the integrations your product needs.
          </Step>
        </ol>
      </Section>

      <FAQ items={faq} />
      <AuditCallToAction subject="your v0 app" />
    </>
  );
}
