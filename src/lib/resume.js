import { resume } from '../config/site.js';

// Checks that the resume PDF really exists. On Netlify (and the dev server) a missing file
// falls back to index.html, so we also check that the response is a PDF.
export async function isResumeAvailable() {
  try {
    const res = await fetch(resume.path, { method: 'HEAD', cache: 'no-store' });
    return res.ok && (res.headers.get('content-type') || '').toLowerCase().includes('pdf');
  } catch (e) {
    return false;
  }
}

// Starts the browser download of the resume PDF configured in src/config/site.js.
export function triggerResumeDownload() {
  const a = document.createElement('a');
  a.href = resume.path;
  a.download = resume.downloadName;
  a.rel = 'noopener';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
