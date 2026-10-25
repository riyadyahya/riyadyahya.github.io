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
  title: 'Bolt to production',
  description: 'Built your app with Bolt.new? A senior engineer audits it in 48 hours, then hardens it or moves it to a codebase you own before it outgrows Bolt.',
  path: '/bolt-to-production/',
});

const faq = [
  {
    question: 'Bolt says “Project size exceeded”. What now?',
    answer: 'The project no longer fits in what the AI can read at once. Trimming unused files buys time. The lasting fix is moving the code to GitHub and working on it with tools built for large codebases, with tests so changes stop breaking each other.',
  },
  {
    question: 'Can I keep using Bolt after you’ve worked on it?',
    answer: 'For new screens and small changes, often yes. Once the code lives in GitHub with tests and CI, Bolt becomes one way to change the app rather than the only one.',
  },
  {
    question: 'Is my Bolt app’s data safe?',
    answer: 'Only if your database rules are right. The key in your front end is public by design, so row-level security on every table is what keeps strangers out. The audit checks every table and every storage bucket.',
  },
];

export default function BoltToProductionPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faq)} />

      <PageHero
        trail={[{ name: 'MVP to production', href: '/mvp-to-production/' }]}
        current="Bolt to production"
        title="Built your app with Bolt? Let’s get it past the prototype."
        linkHref="/mvp-to-production/#packages"
        linkLabel="or see packages and pricing"
      >
        <p>
          Bolt gets a working app in front of people faster than almost anything else. Then the project grows, the AI
          starts losing track of it, and every fix costs more tokens than the last.
        </p>
        <p>
          I’m a fractional CTO who works on React and Supabase apps every day. I audit your Bolt app in 48 hours and
          tell you exactly what to fix, whether Bolt can keep up, and how to move the code somewhere it can keep
          growing.
        </p>
      </PageHero>

      <Section id="stack" title="What Bolt gives you">
        <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
          <Definition term="Front end">
            Usually React with Vite, though Bolt also builds with Vue, Svelte, Astro and Next.js, and Expo for mobile
            apps.
          </Definition>
          <Definition term="Back end">
            Bolt’s built-in database, which runs on Supabase, or a Supabase project you connect yourself, for data,
            sign-in and server-side functions.
          </Definition>
          <Definition term="Hosting">
            Netlify, one click from Bolt, with custom domains. The code can also be downloaded or pushed to GitHub.
          </Definition>
          <Definition term="Left to you">
            Database access rules, keys kept out of the browser, payment edge cases, tests, monitoring, and a structure
            that still makes sense at fifty components.
          </Definition>
        </dl>
      </Section>

      <Section id="problems" title="Where Bolt apps break">
        <div className="grid gap-10 sm:grid-cols-2">
          <Topic title="Too big for the AI to hold">
            Once a project outgrows Bolt’s context window, you see “Project size exceeded”. Well before that, the AI
            can start forgetting earlier decisions, duplicating components and undoing its own work. Bolt’s own advice
            is to trim files or split the app.
          </Topic>
          <Topic title="Tokens burned on loops">
            When a fix doesn’t land, every retry costs tokens. A bug that needs one careful change can eat days of
            credits in prompt loops.
          </Topic>
          <Topic title="Works in the preview, fails live">
            Bolt runs your app inside the browser while you build. Some things behave differently there, such as direct
            database connections, so an app can work in the preview and fail once deployed, or the other way round.
          </Topic>
          <Topic title="Database rules left open">
            Bolt’s database runs on Supabase, where the key in your front end is public by design. Row-level security
            on every table is the only thing keeping strangers out of your data.
          </Topic>
          <Topic title="Keys in the browser">
            Prototypes often call OpenAI or Stripe straight from the front end. Those calls need to move into a server
            function before launch, or anyone can copy your key and spend your money.
          </Topic>
        </div>
      </Section>

      <Section id="paths" title="Three ways forward" aside="The audit tells you which one fits">
        <ol className="grid gap-10 md:grid-cols-3">
          <Step
            label="Option 1"
            title="Harden it on Bolt"
            note="Best when the app is still small enough for Bolt to keep track of."
          >
            Lock down the database rules, move keys server-side, fix the payment flow, and add monitoring and backups.
            You keep prompting in Bolt, with project instructions that keep it consistent.
          </Step>
          <Step
            label="Option 2"
            title="Own the code"
            note="Best when you’re hitting Bolt’s size limits or have paying users."
          >
            Code in your GitHub, your own Supabase project and hosting, a staging environment, and CI with tests. From
            there any developer or AI tool can work on it, not just Bolt.
          </Step>
          <Step
            label="Option 3"
            title="Move to a production codebase"
            note="Best when you’re hiring engineers, raising, or the app needs real structure."
          >
            Restructure the code into a project a team can maintain, rebuild the data model, auth and payments
            properly, and migrate your data and users. The screens your users know stay wherever they work.
          </Step>
        </ol>
      </Section>

      <FAQ items={faq} />
      <AuditCallToAction subject="your Bolt app" />
    </>
  );
}
