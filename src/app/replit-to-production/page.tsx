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
  title: 'Replit to production',
  description: 'Built your app with Replit Agent? A senior engineer audits it in 48 hours, then hardens it on Replit or moves it to infrastructure you own.',
  path: '/replit-to-production/',
});

const faq = [
  {
    question: 'Can I keep building with Replit Agent?',
    answer: 'Yes. I set up rules and a review step so the agent works against development data, never production, and so risky changes go through code review before they ship.',
  },
  {
    question: 'How do I move my database off Replit?',
    answer: 'Replit’s PostgreSQL can be exported with standard Postgres tools and restored into a database you control, such as Neon, Supabase or AWS. Data in Replit’s key-value database moves to something like Redis. I plan the cutover so nothing is lost between the export and the switch.',
  },
  {
    question: 'What happens to my users if we leave Replit Auth?',
    answer: 'They move to a new sign-in provider. People who sign in with Google or GitHub can usually carry on as before; others may need a one-time password reset. I map existing accounts so nobody loses their data.',
  },
  {
    question: 'Why is my Replit app slow to load sometimes?',
    answer: 'If it runs on an Autoscale deployment, it scales down to zero when idle, and the first visitor waits while it starts. A Reserved VM, caching, or a different host fixes it, depending on your traffic and budget.',
  },
];

export default function ReplitToProductionPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faq)} />

      <PageHero
        trail={[{ name: 'MVP to production', href: '/mvp-to-production/' }]}
        current="Replit to production"
        title="Built your app with Replit? Let’s make it safe to grow."
        linkHref="/mvp-to-production/#packages"
        linkLabel="or see packages and pricing"
      >
        <p>
          Replit Agent can take an idea to a running, hosted app with a database and sign-in in an afternoon. That
          speed comes from an agent that can touch everything, including the data your users depend on.
        </p>
        <p>
          I’m a fractional CTO who runs Node.js and Postgres in production every day. I audit your Replit app in 48
          hours and tell you exactly what to fix, what to keep on Replit, and when it’s worth moving.
        </p>
      </PageHero>

      <Section id="stack" title="What Replit gives you">
        <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
          <Definition term="App">
            A full-stack project the agent writes, runs and fixes for you, usually a React front end with a Node.js or
            Python back end.
          </Definition>
          <Definition term="Database">
            PostgreSQL that Replit sets up for you, with separate development and production databases. Older projects
            may also use Replit’s key-value database.
          </Definition>
          <Definition term="Sign-in and storage">
            Replit Auth for user sign-in, Replit Secrets for keys, and Object Storage for files.
          </Definition>
          <Definition term="Hosting">
            Replit Deployments: static sites, Autoscale apps that scale down to zero when idle, or an always-on Reserved
            VM.
          </Definition>
          <Definition term="Left to you">
            Access checks on every API route, tested backups, monitoring, payment edge cases, and a way to change the
            app without risking production data.
          </Definition>
        </dl>
      </Section>

      <Section id="problems" title="Where Replit apps break">
        <div className="grid gap-10 sm:grid-cols-2">
          <Topic title="An agent with access to real data">
            In July 2025, Replit’s agent deleted the production database behind SaaStr founder Jason Lemkin’s app
            during a code freeze, despite instructions not to change anything without approval. Replit now separates
            development and production databases, but anything that can write to real data still needs guardrails and
            backups you have tested.
          </Topic>
          <Topic title="Logged in is not the same as allowed">
            Generated API routes often check that a user is signed in, but not that the record they ask for is theirs.
            Change an ID in the request and you can read someone else’s data.
          </Topic>
          <Topic title="Tied to Replit’s services">
            Replit Auth, Object Storage and the key-value database are Replit services. Moving hosts means replacing
            each one, and carrying your users across without locking them out.
          </Topic>
          <Topic title="Slow first loads">
            Autoscale deployments scale down to zero when nobody is using the app, so the first visitor after a quiet
            spell waits for it to start. An always-on VM fixes that, at a different monthly cost.
          </Topic>
          <Topic title="Database changes without a plan">
            With separate databases, a schema change made in development has to reach production safely. Without
            reviewed migrations, a publish can break the live app or lose data.
          </Topic>
        </div>
      </Section>

      <Section id="paths" title="Three ways forward" aside="The audit tells you which one fits">
        <ol className="grid gap-10 md:grid-cols-3">
          <Step
            label="Option 1"
            title="Harden it on Replit"
            note="Best when Replit’s hosting suits you and the app is still small."
          >
            Add ownership checks to every route, move every key into Secrets, set up backups you have restored at least
            once, and add monitoring. You keep building with the agent, with rules that keep it away from production
            data.
          </Step>
          <Step
            label="Option 2"
            title="Own the infrastructure"
            note="Best when you have paying users and want control."
          >
            Code in your GitHub, your own Postgres on Neon, Supabase or AWS, a staging environment, and CI with tests.
            Replit can stay your editor while production runs somewhere you control.
          </Step>
          <Step
            label="Option 3"
            title="Move to a production codebase"
            note="Best when you’re hiring engineers, raising, or have outgrown the agent."
          >
            Rebuild the data model, auth and payments on a stack your team can hire for, replace Replit Auth and
            storage, and migrate your data and users without downtime.
          </Step>
        </ol>
      </Section>

      <FAQ items={faq} />
      <AuditCallToAction subject="your Replit app" />
    </>
  );
}
