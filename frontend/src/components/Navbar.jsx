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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <> {/* React Fragment used for return multiple elements instead of <div> in javascript*/}
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 z-40 
          transition-opacity duration-300 md:hidden 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90 shadow-lg">
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
                className="block w-full text-left py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800/80 rounded-lg transition-colors font-medium"
              >
                {link.label}
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
