import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Certifications from "../components/Certifications";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);// this is dependency array, it means that the effect will run whenever the location changes. This is important because we want to scroll to the correct section whenever the user navigates to a different route or clicks on a link that changes the URL hash.

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });// the block: 'start' option ensures that the top of the section aligns with the top of the viewport when scrolled into view.
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  };

  return (
    <div>
      <section id="home" className="hero-gradient text-white section-padding text-center fade-in min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Full-Stack MERN Developer <br />
            <span className="text-blue-200 text-2xl sm:text-3xl md:text-4xl">Odoo Developer | Python & Django Engineer</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            I design and develop scalable web applications, enterprise ERP systems,
            and secure backend solutions using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
            <button onClick={() => scrollToSection('projects')} className="btn-primary hover-lift text-sm sm:text-base py-2 px-5 sm:py-3 sm:px-8">
              View Projects
            </button>
            <a
              href="/Berihu_Araya_Resume.pdf"
              download="Berihu_Araya_Resume.pdf"
              className="btn-primary hover-glow inline-flex items-center justify-center text-sm sm:text-base py-2 px-5 sm:py-3 sm:px-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">📄</span>
              Download Resume
            </a>
            <button onClick={() => scrollToSection('contact')} className="btn-primary hover-glow text-sm sm:text-base py-2 px-5 sm:py-3 sm:px-8">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="pt-0 md:pt-0">
        <About />
      </section>
      <section id="skills" className="pt-0 md:pt-0">
        <Skills />
      </section>
      <section id="projects" className="pt-0 md:pt-0">
        <Projects />
      </section>
      <section id="experience" className="pt-0 md:pt-0">
        <Experience />
      </section>
      <section id="certifications" className="pt-0 md:pt-0">
        <Certifications />
      </section>
      <Contact />
    </div>
  );
}
