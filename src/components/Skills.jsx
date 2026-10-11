import { BarChart3, Code2, Database, LineChart, Wrench } from 'lucide-react';
import { skillGroups } from '../config/skills.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

// Keys used by `icon` in src/config/skills.js
const SKILL_ICONS = {
  code: Code2,
  analysis: LineChart,
  chart: BarChart3,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Skills"
            title="Tools and technologies"
            description="What I use for data cleaning, analysis, visualization and databases."
            id="skills-title"
          />
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {skillGroups.map(({ title, icon, skills }, i) => {
            const Icon = SKILL_ICONS[icon] || Code2;
            return (
              <Reveal key={title} delay={i * 50} className="grid gap-4 py-6 md:grid-cols-4 md:gap-8">
                <h3 className="flex items-center gap-3 font-semibold text-fg">
                  <Icon size={20} className="text-accent" aria-hidden="true" />
                  {title}
                </h3>
                <ul className="flex flex-wrap gap-2 md:col-span-3">
                  {skills.map((skill) => (
                    <li key={skill} className="chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
