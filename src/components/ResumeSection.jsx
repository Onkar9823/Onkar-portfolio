import { FileText } from 'lucide-react';
import ResumeButton from './ResumeButton.jsx';
import Reveal from './Reveal.jsx';

export default function ResumeSection() {
  return (
    <section id="resume" aria-labelledby="resume-title" className="py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="card flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FileText size={22} aria-hidden="true" />
              </span>
              <div>
                <h2 id="resume-title" className="text-xl font-semibold text-fg">
                  Want the full picture?
                </h2>
                <p className="mt-1 text-sm text-muted sm:text-base">
                  Download my resume for my education, internship and project details.
                </p>
              </div>
            </div>
            <ResumeButton variant="primary" className="w-full sm:w-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
