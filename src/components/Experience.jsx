import { Briefcase } from 'lucide-react';
import { experience } from '../config/experience.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="03 — Experience" title="Internship experience" id="experience-title" />
        </Reveal>

        <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
          {experience.map((job) => (
            <Reveal as="li" key={`${job.company}-${job.role}`} className="relative">
              <span
                className="absolute -left-6 top-1 inline-flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-accent/60 bg-bg text-accent sm:-left-10"
                aria-hidden="true"
              >
                <Briefcase size={14} />
              </span>

              <div className="card p-5 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-fg">{job.role}</h3>
                    <p className="mt-1 text-accent">{job.company}</p>
                  </div>
                  <p className="inline-flex items-center gap-2 font-mono text-sm text-muted">
                    {job.current ? <span className="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" /> : null}
                    {job.period}
                  </p>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
                  {job.tools.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
