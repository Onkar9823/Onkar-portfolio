import { profile } from '../config/site.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.tagline}</p>
        </div>
        <SocialLinks withEmail />
      </div>
      <p className="container-page mt-8 text-center text-xs text-muted sm:text-left">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
