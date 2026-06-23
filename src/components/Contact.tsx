import { CONTACT_INFO } from '@/constants';

const links = [
  { label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { label: 'WhatsApp', value: '+970 597 216 925', href: `https://wa.me/970597216925` },
  { label: 'LinkedIn', value: 'linkedin.com/in/riyad-yahya', href: CONTACT_INFO.linkedin },
  { label: 'GitHub', value: 'github.com/riyadyahya', href: CONTACT_INFO.github },
  { label: 'Calendar', value: 'Book a 30-min intro call', href: 'https://calendar.app.google/g1xnQQhhXEsXTe2X7' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-neutral-950">Get in touch</h2>
          <span className="text-[13px] text-neutral-500">Usually reply within a day</span>
        </div>

        <p className="text-[16px] sm:text-[17px] leading-[1.65] text-neutral-700 max-w-[62ch] mb-10">
          I&apos;m open to senior and lead engineering work, consulting on AI / voice
          infrastructure, and the occasional interesting project. The fastest way to reach me is email
          or WhatsApp.
        </p>

        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="grid grid-cols-[110px_1fr_auto] items-center gap-4 py-4 group"
              >
                <span className="text-[14px] text-neutral-500">{l.label}</span>
                <span className="text-[15px] text-neutral-950 group-hover:underline underline-offset-4 decoration-neutral-950">
                  {l.value}
                </span>
                <span className="text-neutral-400 group-hover:text-neutral-950 transition-colors">↗</span>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Contact;
