import Section from '@/components/Section';
import { FAQ as QUESTIONS } from '@/constants';

type FAQProps = {
  items?: typeof QUESTIONS;
};

const FAQ = ({ items = QUESTIONS }: FAQProps) => {
  return (
    <Section id="faq" title="Questions">
      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {items.map((q) => (
          <details key={q.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium text-neutral-950 [&::-webkit-details-marker]:hidden">
              {q.question}
              <span
                aria-hidden="true"
                className="text-[22px] leading-none text-neutral-500 motion-safe:transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pb-6 -mt-1 text-[15px] leading-[1.65] text-neutral-700 max-w-[62ch]">{q.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
