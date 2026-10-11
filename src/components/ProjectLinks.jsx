import { ExternalLink, Github } from 'lucide-react';

// Only real http(s) URLs become buttons. Anything else is treated as "not available yet".
const isUrl = (value) => typeof value === 'string' && /^https?:\/\//i.test(value.trim());

export default function ProjectLinks({ links = {}, title }) {
  const hasCode = isUrl(links.code);
  const hasDemo = isUrl(links.demo);

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {hasCode ? (
        <a
          href={links.code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View code for ${title} (opens in a new tab)`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          <Github size={16} aria-hidden="true" />
          View Code
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-muted">
          <Github size={16} aria-hidden="true" />
          Code: coming soon
        </span>
      )}

      {hasDemo ? (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${title} (opens in a new tab)`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          <ExternalLink size={16} aria-hidden="true" />
          Live Demo
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-muted">
          <ExternalLink size={16} aria-hidden="true" />
          Live demo: coming soon
        </span>
      )}
    </div>
  );
}
