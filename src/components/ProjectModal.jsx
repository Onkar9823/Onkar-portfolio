import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import ProjectLinks from './ProjectLinks.jsx';
import ProjectVisual from './ProjectVisual.jsx';

const TONE_STYLES = {
  done: 'border-accent/50 text-accent',
  progress: 'border-violet/50 text-violet',
  planned: 'border-dashed border-line text-muted',
  neutral: 'border-line text-fg',
};

// Detailed project view built on the native <dialog> element:
// it traps focus, closes with Esc and restores focus to the button that opened it.
export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    const opener = document.activeElement; // restore focus here when the popup closes
    if (typeof dialog.showModal === 'function' && !dialog.open) dialog.showModal();
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
      if (dialog.open) dialog.close();
      if (opener && typeof opener.focus === 'function' && document.contains(opener)) opener.focus();
    };
  }, []);

  const titleId = `modal-title-${project.id}`;

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        // A click directly on the <dialog> element is a click on the backdrop
        if (e.target === ref.current) onClose();
      }}
      className="m-auto max-h-[90vh] w-[calc(100%-1.5rem)] max-w-3xl overflow-y-auto rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/70"
    >
      <div className="p-5 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">{project.category}</p>
            <h3 id={titleId} className="mt-2 text-2xl font-bold text-fg">
              {project.title}
            </h3>
            {project.status ? (
              <span className="mt-3 inline-block rounded-full border border-violet/50 bg-violet/10 px-2.5 py-0.5 text-xs font-semibold text-violet">
                {project.status}
              </span>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line text-muted hover:border-accent/60 hover:text-accent"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <p className="mt-5 text-base leading-relaxed text-muted">{project.overview}</p>

        <div className="mt-6">
          <ProjectVisual diagram={project.diagram} />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-fg">Key objectives</h4>
            <ul className="mt-3 space-y-2">
              {project.objectives.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            {project.sections.map((section) => (
              <div key={section.title} className={`rounded-xl border p-4 ${TONE_STYLES[section.tone] || TONE_STYLES.neutral}`}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{section.title}</h4>
                <ul className="mt-2 space-y-1.5">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {project.note ? <p className="mt-6 text-sm italic text-muted">{project.note}</p> : null}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-line pt-5">
          <ProjectLinks links={project.links} title={project.title} />
        </div>
      </div>
    </dialog>
  );
}
