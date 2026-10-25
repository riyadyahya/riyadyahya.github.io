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
  title: 'AI-written codebase audit',
  description: 'Building with Cursor, Windsurf or Claude Code? A senior engineer audits your AI-written codebase in 48 hours and sets up guardrails that keep it healthy.',
  path: '/ai-codebase-audit/',
});

const faq = [
  {
    question: 'Which tools do you work with?',
    answer: 'I use Claude Code and Cursor every day, with custom subagents and MCP servers. The guardrails I set up are plain files and CI checks, so they work just as well with Windsurf and other tools.',
  },
  {
    question: 'Will this slow my team down?',
    answer: 'The goal is the opposite. Good rules and checks mean agents get it right the first time more often, and reviews go faster because the obvious mistakes never reach them.',
  },
  {
    question: 'Do we have to stop using AI for anything?',
    answer: 'No. I’ll suggest where a person should stay in the loop, usually auth, payments, data migrations and anything you can’t undo, and let agents run freely everywhere else.',
  },
];

export default function AiCodebaseAuditPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faq)} />

      <PageHero
        trail={[{ name: 'MVP to production', href: '/mvp-to-production/' }]}
        current="AI-written codebase audit"
        title="Coding with Cursor or Claude Code? Keep the speed, lose the mess."
        linkHref="/mvp-to-production/#packages"
        linkLabel="or see packages and pricing"
      >
        <p>
          Cursor, Windsurf and Claude Code write code into your own repository, which is a big step up from app
          builders. They also write it faster than anyone can read it: logic duplicated across files, patterns that
          drift from folder to folder, and tests that pass without testing anything.
        </p>
        <p>
          I use these tools every day, with custom subagents and MCP servers, and review what they write for a living.
          I audit your codebase in 48 hours and set up the rules and checks that keep agents working with your
          architecture, not around it.
        </p>
      </PageHero>

      <Section id="stack" title="What these tools give you">
        <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
          <Definition term="Code">
            Real code in your own repository, in whatever stack you choose. No platform to outgrow.
          </Definition>
          <Definition term="Speed">
            Features in hours instead of days, from agents that can read, edit and run your whole project.
          </Definition>
          <Definition term="Guardrails">
            Only the ones you set up: rules files such as CLAUDE.md, AGENTS.md or Cursor rules, CI checks, and code
            review.
          </Definition>
          <Definition term="Left to you">
            Architecture, security, review, and keeping a fast-growing codebase understandable to the next person, or
            agent, who opens it.
          </Definition>
        </dl>
      </Section>

      <Section id="problems" title="Where AI-written codebases break">
        <div className="grid gap-10 sm:grid-cols-2">
          <Topic title="Security flaws at scale">
            In Veracode’s 2025 study of over 100 models, AI-written code introduced a security flaw in 45% of tasks,
            and models got better at writing working code without getting more secure. More code, faster, means more
            flaws.
          </Topic>
          <Topic title="The same thing built three ways">
            Agents solve the problem in front of them. Without rules, you end up with three date helpers, two API
            clients and a different error-handling style in every folder.
          </Topic>
          <Topic title="Tests that pass without testing">
            Ask an agent to make the tests pass and it may change the test instead of the code, or mock away the part
            that matters. A green build stops meaning much.
          </Topic>
          <Topic title="Dependencies nobody chose">
            Agents add packages freely, including abandoned ones and, now and then, names that don’t exist yet and get
            registered later by attackers.
          </Topic>
          <Topic title="Changes too big to review">
            When an agent touches forty files at once, review turns into skimming. That’s how subtle bugs and data
            leaks reach production.
          </Topic>
          <Topic title="Context that lives in one head">
            The prompts, decisions and workarounds behind the code aren’t written down anywhere. The next developer, or
            the next agent session, starts from zero.
          </Topic>
        </div>
      </Section>

      <Section id="paths" title="Three ways forward" aside="The audit tells you which one fits">
        <ol className="grid gap-10 md:grid-cols-3">
          <Step
            label="Option 1"
            title="Set up guardrails"
            note="Best when the codebase is healthy and you want it to stay that way."
          >
            Rules files for your tools, CI that blocks the common mistakes, a review checklist for agent changes, and
            custom subagents that know your patterns.
          </Step>
          <Step
            label="Option 2"
            title="Clean up, then guard"
            note="Best when the codebase has drifted and changes are slowing down."
          >
            Consolidate duplicated logic, fix the risky spots from the audit, replace tests that test nothing, then add
            the guardrails so it doesn’t drift again.
          </Step>
          <Step
            label="Option 3"
            title="Ongoing technical leadership"
            note="Best when you’re growing the team or shipping fast without a senior reviewer."
          >
            Fractional CTO time: architecture decisions, review of major changes, and one AI workflow your whole team
            uses the same way.
          </Step>
        </ol>
      </Section>

      <FAQ items={faq} />
      <AuditCallToAction subject="your AI-written codebase" />
    </>
  );
}
