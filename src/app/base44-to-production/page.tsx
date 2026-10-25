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
  title: 'Base44 to production',
  description: 'Built your app with Base44? A senior engineer audits it in 48 hours, then hardens it on Base44 or moves it to a back end and database you own.',
  path: '/base44-to-production/',
});

const faq = [
  {
    question: 'Can I export my Base44 app?',
    answer: 'You can export the code to GitHub on Base44’s Builder plan or higher. That export is the front end, and it still calls Base44’s servers for data and sign-in, so running it anywhere else means rebuilding the back end.',
  },
  {
    question: 'Is Base44 secure enough for customer data?',
    answer: 'Base44 fixes platform issues quickly, as it did in July 2025. What it can’t decide for you is who should see which records. That’s app-level work, and it’s where most of the audit goes on a Base44 app.',
  },
  {
    question: 'How long does a move off Base44 take?',
    answer: 'It depends on how many data sets, workflows and integrations you have. The audit maps them and gives you a fixed quote. For a typical MVP, it’s usually 1 to 3 weeks.',
  },
];

export default function Base44ToProductionPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faq)} />

      <PageHero
        trail={[{ name: 'MVP to production', href: '/mvp-to-production/' }]}
        current="Base44 to production"
        title="Built your app with Base44? Let’s make sure you own what you built."
        linkHref="/mvp-to-production/#packages"
        linkLabel="or see packages and pricing"
      >
        <p>
          Base44 hands you a working app with a database, sign-in and integrations already running, without touching a
          server. The trade-off is that the back end belongs to Base44, and so do the limits.
        </p>
        <p>
          I’m a fractional CTO who builds back ends, auth and data migrations for a living. I audit your Base44 app in
          48 hours and tell you what to fix now, how locked in you really are, and what a move would take.
        </p>
      </PageHero>

      <Section id="stack" title="What Base44 gives you">
        <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
          <Definition term="Front end">
            A React app, generated and hosted by Base44. On the Builder plan and above, the code can be exported to
            GitHub.
          </Definition>
          <Definition term="Back end">
            Base44’s own: your data, user sign-in, backend functions and integrations, all reached through the Base44
            SDK.
          </Definition>
          <Definition term="Hosting">Base44 runs both the app and its back end for you, with custom domains.</Definition>
          <Definition term="Left to you">
            Who can see which records, tests on the workflows that matter, regular exports of your data, and a way out
            if you outgrow the platform.
          </Definition>
        </dl>
      </Section>

      <Section id="problems" title="Where Base44 apps break">
        <div className="grid gap-10 sm:grid-cols-2">
          <Topic title="A back end you can’t take with you">
            Every data read, sign-in and backend call goes through the Base44 SDK to Base44’s servers. Exporting to
            GitHub gives you the front end; it doesn’t give you a back end you can run yourself.
          </Topic>
          <Topic title="Your security depends on theirs">
            In July 2025, Wiz researchers found that anyone with an app’s public ID could register on private Base44
            apps, getting past SSO. Base44 fixed it within a day, but it shows how much rides on the platform.
          </Topic>
          <Topic title="Every user sees every record">
            Generated apps often let any signed-in user read everything in a data set. Each user should reach only their
            own records, and admin screens should check that the user really is an admin.
          </Topic>
          <Topic title="Workflows nobody can test">
            Logic spread across prompts, backend functions and integrations is hard to review. When a workflow breaks,
            there’s no test suite to tell you what changed or when.
          </Topic>
          <Topic title="Data you don’t control">
            Your records live in Base44’s database. Without regular exports and a map of how they fit together, moving
            them later becomes an emergency instead of a project.
          </Topic>
        </div>
      </Section>

      <Section id="paths" title="Three ways forward" aside="The audit tells you which one fits">
        <ol className="grid gap-10 md:grid-cols-3">
          <Step
            label="Option 1"
            title="Harden it on Base44"
            note="Best for internal tools and early products where Base44 still fits."
          >
            Tighten who can see which records, review integrations and admin access, and document the workflows that
            matter. You keep building in Base44, with clear rules for what goes where.
          </Step>
          <Step
            label="Option 2"
            title="Plan the exit early"
            note="Best when the product is growing and the data matters."
          >
            Export the code to GitHub, map every data set, function and integration, and set up regular data exports,
            so a move later is a planned project, not a fire drill.
          </Step>
          <Step
            label="Option 3"
            title="Move to a production codebase"
            note="Best when you’re raising, hiring, or need to own the stack."
          >
            Keep the front end where it works, rebuild the back end on your own database and auth, such as Supabase,
            and migrate your data and users.
          </Step>
        </ol>
      </Section>

      <FAQ items={faq} />
      <AuditCallToAction subject="your Base44 app" />
    </>
  );
}
