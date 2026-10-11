import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../config/site.js';
import ThemeToggle from './ThemeToggle.jsx';
import ResumeButton from './ResumeButton.jsx';
import Avatar from './Avatar.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Highlight the link of the section currently in view
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight text-fg" aria-label={`${profile.name} — home`}>
          <Avatar alt="" className="h-9 w-9 rounded-full border border-accent/50" />
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-fg ${
                  active === id ? 'text-accent' : 'text-muted'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ResumeButton variant="primary" label="Resume" className="hidden !px-4 !py-2 sm:inline-flex" />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-fg lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-bg lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    active === id ? 'bg-elevated text-accent' : 'text-fg'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <ResumeButton variant="primary" label="Download Resume" className="w-full" />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
