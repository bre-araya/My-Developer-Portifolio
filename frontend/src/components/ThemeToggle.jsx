import { useEffect, useState } from 'react';

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
    } catch (e) {}
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    // Default to dark per request "make light dark"
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const isDark = theme === 'dark';
  const targetLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  const targetMode = isDark ? 'Light' : 'Dark';

  return (
    <button
      aria-label={targetLabel}
      title={targetLabel}
      onClick={toggle}
      className={`inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-100 dark:shadow-none ${className}`}
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="currentColor"
          className="h-5 w-5 text-white-400">
          <circle cx="12" cy="12" r="5" />
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="currentColor"
          className="h-5 w-5 text-slate-700 dark:text-slate-200">
          <path
            d="M21.75 15.59A9.25 9.25 0 0 1 12 2.25
            9.25 9.25 0 1 0 21.75 15.59z"
          />
        </svg>
      )}
      <span>{targetMode}</span>
    </button>
  );
}
