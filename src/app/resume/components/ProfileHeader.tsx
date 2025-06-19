import {CONTACT_INFO, PERSONAL_INFO} from '@/constants';
import {Github, Globe, Linkedin, Mail, Phone} from 'lucide-react';

export default function ProfileHeader() {
    return (
        <div className="flex-1 border-b mb-2">
            <h1 className="text-3xl font-bold leading-tight mb-1">{PERSONAL_INFO.name}</h1>
            <div className="text-lg text-blue-700 font-semibold mb-1">{PERSONAL_INFO.title}</div>
            <div className="text-gray-600 text-sm mb-4">{PERSONAL_INFO.summary}</div>
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 items-center text-sm text-gray-700 mb-4">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1 hover:text-blue-700"
                   title="Email"><Mail size={16}/>{CONTACT_INFO.email}</a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1 hover:text-blue-700"
                   title="Phone"><Phone size={16}/>{CONTACT_INFO.phone}</a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1 hover:text-blue-700" title="LinkedIn"><Linkedin size={16}/>LinkedIn</a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1 hover:text-blue-700" title="GitHub"><Github size={16}/>GitHub</a>
                <a href={CONTACT_INFO.portfolio} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1 hover:text-blue-700" title="Portfolio"><Globe size={16}/>Portfolio</a>
            </div>
            {/* Skill Tags */}
            {/* <div className="flex flex-wrap gap-2 mb-2">
          {TOP_SKILLS.map((skill) => (
            <span key={skill} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">{skill}</span>
          ))}
        </div> */}
        </div>
    );
}
