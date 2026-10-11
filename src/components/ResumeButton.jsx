import { Download } from 'lucide-react';
import { useResumeDownload } from '../context/ResumeDownloadContext.jsx';

// Every "Download Resume" button on the site. Clicking opens the shared popup;
// the PDF downloads when the visitor clicks OK in that popup.
export default function ResumeButton({ variant = 'secondary', label = 'Download Resume', className = '' }) {
  const { openResumeModal } = useResumeDownload();
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button type="button" onClick={openResumeModal} aria-haspopup="dialog" className={`${base} ${className}`}>
      <Download size={16} aria-hidden="true" />
      {label}
    </button>
  );
}
