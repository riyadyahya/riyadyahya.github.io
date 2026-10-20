import {CONTACT_INFO, PERSONAL_INFO} from '@/constants';

const stripUrl = (url: string) =>
    url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');

export default function ProfileHeader() {
    return (
        <header className="border-b border-neutral-200 pb-6 mb-8">
            <h1 className="text-[30px] font-semibold tracking-tight leading-tight text-neutral-950 mb-1">{PERSONAL_INFO.name}</h1>
            <p className="text-[17px] font-medium text-neutral-700 mb-3">{PERSONAL_INFO.title}</p>
            <p className="text-[14px] leading-[1.65] text-neutral-700 max-w-[80ch] mb-4">{PERSONAL_INFO.summary}</p>
            <div className="text-[14px] text-neutral-700 flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline underline-offset-4">
                    {CONTACT_INFO.email}
                </a>
                <span className="text-neutral-400" aria-hidden>·</span>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:underline underline-offset-4">
                    {CONTACT_INFO.phone}
                </a>
                <span className="text-neutral-400" aria-hidden>·</span>
                <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                >
                    {stripUrl(CONTACT_INFO.linkedin)}
                </a>
                <span className="text-neutral-400" aria-hidden>·</span>
                <a
                    href={CONTACT_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                >
                    {stripUrl(CONTACT_INFO.github)}
                </a>
                <span className="text-neutral-400" aria-hidden>·</span>
                <a
                    href={CONTACT_INFO.portfolio}
                    className="hover:underline underline-offset-4"
                >
                    {stripUrl(CONTACT_INFO.portfolio)}
                </a>
            </div>
        </header>
    );
}
