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
    <> {/* React Fragment used for return multiple elements instead of <div> in javascript*/}
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 z-40 
          transition-opacity duration-300 md:hidden 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
        <div className="flex justify-between items-center py-4 px-4 md:px-20">
          {/* Logo */}
          <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
          bg-clip-text text-transparent select-none hover:scale-105 transition-transform duration-300">
            Berihu Araya
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className="nav-link whitespace-nowrap"  /* used for prevent text wrapping! */
              >
                {link.label}
              </button>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-1 md:hidden">  {/*this md:hidden mean Hide this div on medium and large screens */} 
            <ThemeToggle className="shadow-none" />
            <button
              className="p-2 text-2xl leading-none focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl 
          transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50
                  rounded-lg transition-colors font-medium"
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
