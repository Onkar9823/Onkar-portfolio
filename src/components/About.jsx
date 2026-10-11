import { BarChart3, Database, GraduationCap, LineChart } from 'lucide-react';
import { profile } from '../config/site.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const FOCUS = [
  { Icon: Database, text: 'Cleaning and transforming data with Python, SQL and Excel' },
  { Icon: LineChart, text: 'Exploratory data analysis to find trends and patterns' },
  { Icon: BarChart3, text: 'Interactive Power BI dashboards for stakeholders' },
];

export default function About() {
  const { education } = profile;
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="01 — About" title="About me" id="about-title" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 sm:text-lg">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={100} className="space-y-6 lg:col-span-2">
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">Education</p>
                  <h3 className="mt-1 font-semibold text-fg">{education.degree}</h3>
                  <p className="text-sm text-muted">
                    {education.school} · {education.date}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">What I work on</p>
              <ul className="mt-4 space-y-3">
                {FOCUS.map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-fg">
                    <Icon size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
