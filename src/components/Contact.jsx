import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile, social } from '../config/site.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      /* clipboard unavailable: the email link above still works */
    }
  };

  const linkClass =
    'card flex items-center gap-4 p-4 transition-colors hover:border-accent/50 sm:p-5';

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="05 — Contact"
            title="Let's Connect"
            description="I'm looking for entry-level opportunities in data analytics, data science and machine learning. The quickest way to reach me is email."
            id="contact-title"
          />
        </Reveal>

        <Reveal className="grid gap-4 md:grid-cols-3">
          <div className={`${linkClass} min-w-0 md:col-span-3`}>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Mail size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-widest text-muted">Email</p>
              <a href={`mailto:${profile.email}`} className="block break-all font-semibold text-fg hover:text-accent">
                {profile.email}
              </a>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-line px-3 text-sm text-muted hover:border-accent/60 hover:text-accent"
            >
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? 'Email address copied' : ''}
            </span>
          </div>

          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className={`${linkClass} md:col-span-1`}>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Linkedin size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">LinkedIn</p>
              <p className="font-semibold text-fg">onkar-wakchaure</p>
            </div>
          </a>

          <a href={social.github} target="_blank" rel="noopener noreferrer" className={`${linkClass} md:col-span-1`}>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Github size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">GitHub</p>
              <p className="font-semibold text-fg">Onkar9823</p>
            </div>
          </a>

          <div className={`${linkClass} md:col-span-1`}>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">Location</p>
              <p className="font-semibold text-fg">{profile.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
