import {CONTACT_INFO, PERSONAL_INFO} from '@/constants';

const stripUrl = (url: string) =>
    url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');

export default function ProfileHeader() {
    return (
        <div className="flex-1 border-b mb-2">
            <h1 className="text-3xl font-bold leading-tight mb-1">{PERSONAL_INFO.name}</h1>
            <div className="text-lg text-blue-700 font-semibold mb-1">{PERSONAL_INFO.title}</div>
            <div className="text-gray-600 text-sm mb-4">{PERSONAL_INFO.summary}</div>
            {/* Contact Info — single inline row, ATS-readable, clickable */}
            <div className="text-sm text-gray-700 mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                    {CONTACT_INFO.email}
                </a>
                <span className="text-gray-400" aria-hidden>·</span>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:underline">
                    {CONTACT_INFO.phone}
                </a>
                <span className="text-gray-400" aria-hidden>·</span>
                <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    {stripUrl(CONTACT_INFO.linkedin)}
                </a>
                <span className="text-gray-400" aria-hidden>·</span>
                <a
                    href={CONTACT_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    {stripUrl(CONTACT_INFO.github)}
                </a>
                <span className="text-gray-400" aria-hidden>·</span>
                <a
                    href={CONTACT_INFO.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    {stripUrl(CONTACT_INFO.portfolio)}
                </a>
            </div>
        </div>
    );
}
