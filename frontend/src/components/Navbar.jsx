import { useState } from 'react';
import ThemeToggle from './ThemeToggle';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'experience', label: 'Experience', icon: '📅' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certifications', label: 'Certifications', icon: '🏅' },
    { id: 'contact', label: 'Contact', icon: '📩' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 z-40 
          transition-opacity duration-300 md:hidden 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-lg dark:border-slate-800/80 dark:bg-slate-950/90">
        <div className="flex justify-between items-center py-4 px-4 md:px-20">
          {/* Logo */}
          <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent select-none hover:scale-105 transition-transform duration-300">
            Berihu Araya
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className="nav-link whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle className="shadow-none" />
            <button
              className="rounded-lg border border-slate-300 bg-white/80 p-2 text-2xl leading-none text-slate-700 shadow-sm transition-colors hover:border-blue-500 hover:text-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden fixed inset-x-0 top-16 z-40 border-t border-slate-300 bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-950/95 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)}
                className="flex w-full cursor-pointer items-center gap-3 rounded-lg py-3 px-4 text-left font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-blue-400"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg shadow-sm dark:bg-slate-800">{link.icon}</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
}
