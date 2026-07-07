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

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={`p-2 rounded-full transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3.1a1 1 0 0 1 .9 1.1A7 7 0 1 0 20 12a1 1 0 0 1 1.1.9A9 9 0 1 1 12 3.1z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.76 4.84l-1.8-1.79L3.17 4.84 4.97 6.63 6.76 4.84zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zm7.24-2.16l1.8 1.79 1.79-1.79-1.79-1.79-1.8 1.79zM20 11v2h3v-2h-3zM4.93 19.07l1.79-1.79-1.79-1.79-1.8 1.79 1.8 1.79zM12 6a6 6 0 100 12A6 6 0 0012 6z" />
        </svg>
      )}
    </button>
  );
}
