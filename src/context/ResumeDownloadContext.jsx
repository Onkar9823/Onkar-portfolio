import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import ResumeDownloadModal from '../components/ResumeDownloadModal.jsx';

const ResumeDownloadContext = createContext(null);

// Wrap the app once. Every resume button calls openResumeModal(), so there is exactly
// one popup and one piece of download logic for the whole site.
export function ResumeDownloadProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openResumeModal = useCallback(() => setOpen(true), []);
  const closeResumeModal = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openResumeModal }), [openResumeModal]);

  return (
    <ResumeDownloadContext.Provider value={value}>
      {children}
      {open ? <ResumeDownloadModal onClose={closeResumeModal} /> : null}
    </ResumeDownloadContext.Provider>
  );
}

export function useResumeDownload() {
  const ctx = useContext(ResumeDownloadContext);
  if (!ctx) throw new Error('useResumeDownload must be used inside <ResumeDownloadProvider>');
  return ctx;
}
