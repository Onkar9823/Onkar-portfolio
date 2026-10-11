import { useState } from 'react';
import { projects } from '../config/projects.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="04 — Projects"
            title="Featured projects"
            description="Two Power BI dashboards and one machine learning project. Work that is still in progress is labeled as such."
            id="projects-title"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80} className="h-full">
              <ProjectCard project={project} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected ? <ProjectModal project={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}
