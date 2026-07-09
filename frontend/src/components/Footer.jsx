import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-3 md:mb-4">Berihu</h3>
            <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Full-Stack Developer specializing in MERN stack, Odoo ERP, and modern web technologies.
              Creating scalable solutions that drive business success.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <span className="text-lg md:text-xl">💼</span>
              </a>
              <a
                href="#"
                className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <span className="text-lg md:text-xl">🐦</span>
              </a>
              <a
                href="#"
                className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <span className="text-lg md:text-xl">💻</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Get In Touch</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                  <span className="text-xs md:text-sm">📧</span>
                </div>
                <span className="text-gray-300 text-xs md:text-sm">berihuaraya374@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                  <span className="text-xs md:text-sm">📱</span>
                </div>
                <span className="text-gray-300 text-xs md:text-sm">+251 972 129 362 </span>
              </div>
              <div className="flex items-center">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                  <span className="text-xs md:text-sm">📍</span>
                </div>
                <span className="text-gray-300 text-xs md:text-sm">Mekelle, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm">
              © {new Date().getFullYear()} Berihu. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-2 md:mt-0">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
