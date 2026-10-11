import { Github, Linkedin, Mail } from 'lucide-react';
import { profile, social } from '../config/site.js';

const ITEMS = [
  { key: 'github', label: 'GitHub profile', href: social.github, Icon: Github, external: true },
  { key: 'linkedin', label: 'LinkedIn profile', href: social.linkedin, Icon: Linkedin, external: true },
  { key: 'email', label: 'Send an email', href: `mailto:${profile.email}`, Icon: Mail, external: false },
];

export default function SocialLinks({ withEmail = false, className = '' }) {
  const items = withEmail ? ITEMS : ITEMS.filter((i) => i.key !== 'email');
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ key, label, href, Icon, external }) => (
        <li key={key}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
