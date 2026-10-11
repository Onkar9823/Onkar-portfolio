import { ArrowUpRight } from 'lucide-react';
import ProjectLinks from './ProjectLinks.jsx';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectCard({ project, onOpen }) {
  const { title, category, status, overview, objectives, tech, diagram, links } = project;

  return (
    <article className="card flex h-full flex-col p-5 transition-colors duration-200 hover:border-accent/50 sm:p-6">
      <ProjectVisual diagram={diagram} />

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">{category}</span>
        {status ? (
          <span className="rounded-full border border-violet/50 bg-violet/10 px-2.5 py-0.5 text-xs font-semibold text-violet">
            {status}
          </span>
        ) : null}
      </div>

      <h3 className="mt-2 text-xl font-semibold text-fg">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{overview}</p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-fg">Key objectives</p>
        <ul className="mt-2 space-y-1.5">
          {objectives.map((o) => (
            <li key={o} className="flex gap-2 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-4 pt-6">
        <ProjectLinks links={links} title={title} />
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
          className="btn-secondary w-full"
        >
          View details
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
