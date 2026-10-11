import { useCallback, useEffect, useState } from 'react';

// Dark is the default. The initial class is applied by the inline script in index.html.
export default function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const toggle = useCallback(() => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* storage blocked: theme still works for this visit */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#0b0f19' : '#f8fafc');
  }, []);

  return { theme, toggle };
}
