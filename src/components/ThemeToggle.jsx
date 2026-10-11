import { Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme.js';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-accent/60 hover:text-accent"
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
