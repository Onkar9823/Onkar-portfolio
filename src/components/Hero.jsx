import { ArrowRight } from 'lucide-react';
import { profile } from '../config/site.js';
import Avatar from './Avatar.jsx';
import HeroVisual from './HeroVisual.jsx';
import ResumeButton from './ResumeButton.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Decorative background */}
      <div className="bg-dots pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      {/* Mobile order: photo, intro, code visual. Desktop: intro on the left, photo above visual on the right. */}
      <div className="container-page relative grid gap-x-16 gap-y-10 lg:grid-cols-2 lg:items-center">
        {/* Profile photo */}
        <div className="justify-self-center lg:col-start-2 lg:row-start-1 lg:justify-self-center">
          <div className="rounded-full bg-gradient-to-br from-accent to-violet p-1 shadow-xl shadow-accent/10">
            <div className="rounded-full bg-bg p-1.5">
              <Avatar
                priority
                size={288}
                className="h-40 w-40 rounded-full sm:h-52 sm:w-52 lg:h-64 lg:w-64"
              />
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted">
            <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-accent sm:text-base">{profile.headline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              Explore My Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <ResumeButton />
          </div>

          <SocialLinks className="mt-8" />
        </div>

        {/* Code-inspired decorative visual */}
        <div className="lg:col-start-2 lg:row-start-2">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
