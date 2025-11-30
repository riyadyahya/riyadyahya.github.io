import {CONTACT_INFO, PERSONAL_INFO} from '@/constants';

export default function ProfileHeader() {
    return (
        <div className="flex-1 border-b mb-2">
            <h1 className="text-3xl font-bold leading-tight mb-1">{PERSONAL_INFO.name}</h1>
            <div className="text-lg text-blue-700 font-semibold mb-1">{PERSONAL_INFO.title}</div>
            <div className="text-gray-600 text-sm mb-4">{PERSONAL_INFO.summary}</div>
            {/* Contact Info - Plain text format for ATS compatibility */}
            <div className="text-sm text-gray-700 mb-4">
                <div>{CONTACT_INFO.email}</div>
                <div>{CONTACT_INFO.phone}</div>
                <div>LinkedIn: {CONTACT_INFO.linkedin}</div>
                <div>GitHub: {CONTACT_INFO.github}</div>
                <div>Portfolio: {CONTACT_INFO.portfolio}</div>
            </div>
        </div>
    );
}
