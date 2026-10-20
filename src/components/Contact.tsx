import BookCallButton from '@/components/BookCallButton';
import Section from '@/components/Section';
import { CONTACT_INFO } from '@/constants';

const links = [
  { label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { label: 'WhatsApp', value: CONTACT_INFO.phoneDisplay, href: CONTACT_INFO.whatsapp },
  { label: 'LinkedIn', value: 'linkedin.com/in/riyad-yahya', href: CONTACT_INFO.linkedin },
  { label: 'GitHub', value: 'github.com/riyadyahya', href: CONTACT_INFO.github },
];

const Contact = () => {
  return (
    <Section id="contact" title="Start with a 30-minute call" aside="Usually reply within a day">
      <p className="text-[16px] sm:text-[17px] leading-[1.65] text-neutral-700 max-w-[62ch] mb-8">
        Tell me what you&apos;re building and where it&apos;s stuck. If I&apos;m not the right fit, I&apos;ll tell you
        on the call. Prefer writing? Email or WhatsApp works too.
      </p>

      <BookCallButton />

      <ul className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
        {links.map((l) => {
          const external = l.href.startsWith('http');
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="grid grid-cols-[96px_1fr_auto] sm:grid-cols-[110px_1fr_auto] items-center gap-4 py-4 group"
              >
                <span className="text-[14px] text-neutral-600">{l.label}</span>
                <span className="text-[15px] text-neutral-950 break-all group-hover:underline underline-offset-4 decoration-neutral-950">
                  {l.value}
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </span>
                <span aria-hidden="true" className="text-neutral-500 group-hover:text-neutral-950 transition-colors">
                  ↗
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Contact;
