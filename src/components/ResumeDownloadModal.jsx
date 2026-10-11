import { useEffect, useRef, useState } from 'react';
import { FileDown } from 'lucide-react';
import { resume } from '../config/site.js';
import { isResumeAvailable, triggerResumeDownload } from '../lib/resume.js';

// The one popup used by every "Download Resume" button (opened through ResumeDownloadContext).
// It does NOT download anything when it opens. The PDF downloads when the visitor clicks OK.
// Escape or a backdrop click only close the popup.
export default function ResumeDownloadModal({ onClose }) {
  const dialogRef = useRef(null);
  const [missing, setMissing] = useState(false);
  const [checking, setChecking] = useState(false);

  // Open as a native modal dialog (focus trap, Esc, inert background) and lock page scroll
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const opener = document.activeElement; // restore focus here when the popup closes
    if (typeof dialog.showModal === 'function' && !dialog.open) dialog.showModal();
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
      if (dialog.open) dialog.close();
      if (opener && typeof opener.focus === 'function' && document.contains(opener)) opener.focus();
    };
  }, []);

  const confirm = async () => {
    if (checking) return;
    if (missing) {
      onClose();
      return;
    }
    setChecking(true);
    const available = await isResumeAvailable();
    setChecking(false);
    if (available) {
      onClose();
      triggerResumeDownload();
    } else {
      setMissing(true); // no broken download: explain instead
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="resume-modal-title"
      aria-describedby="resume-modal-desc"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose(); // click on the backdrop
      }}
      className="modal m-auto w-[calc(100%-1.5rem)] max-w-sm rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 text-center sm:p-8">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <FileDown size={26} aria-hidden="true" />
        </span>
        <h2 id="resume-modal-title" className="mt-5 text-2xl font-bold tracking-tight text-fg">
          Resume Download
        </h2>

        {missing ? (
          <div id="resume-modal-desc" role="alert" className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            <p>The resume file isn&apos;t available yet. Please try again later.</p>
            <p className="rounded-lg border border-dashed border-line p-3 text-xs">
              Site owner: add your PDF at <code className="font-mono text-fg">public{resume.path}</code> and redeploy.
            </p>
          </div>
        ) : (
          <p id="resume-modal-desc" className="mt-3 text-base leading-relaxed text-muted">
            Resume download triggered on Onkar&apos;s Portfolio.
          </p>
        )}

        <button
          type="button"
          autoFocus
          onClick={confirm}
          disabled={checking}
          className="btn-primary mt-7 w-full disabled:cursor-wait disabled:opacity-70"
        >
          OK
        </button>
      </div>
    </dialog>
  );
}
