import { useState } from 'react';

const certifications = [
  {
    id: 'odoo-functional',
    title: 'Odoo Functional Certification',
    topic: 'ERP Implementation',
    issuer: 'Odoo',
    date: 'April 2025',
    description: 'Validated skills in Odoo configuration, workflow automation, and enterprise resource planning for manufacturing, sales, and inventory management.',
    highlights: [
      'ERP module setup and customization',
      'Business process automation',
      'Data migration and reporting',
    ],
    image: '/certificates/odoo.svg',
    link: '/certificates/odoo.svg',
  },
  {
    id: 'mern-stack',
    title: 'MERN Full-Stack Certification',
    topic: 'Web Application Architecture',
    issuer: 'Fullstack Academy',
    date: 'November 2024',
    description: 'Demonstrated end-to-end MERN development capability through scalable web applications with React, Node.js, Express, and MongoDB.',
    highlights: [
      'Responsive UI with React',
      'API design with Express',
      'MongoDB data modeling',
    ],
    image: '/certificates/mern.svg',
    link: '/certificates/mern.svg',
  },
  {
    id: 'django-python',
    title: 'Python & Django Expert Certification',
    topic: 'Backend Systems',
    issuer: 'Coursera',
    date: 'January 2025',
    description: 'Proved expertise in Django backend engineering, REST API development, security hardening, and performant database-backed systems.',
    highlights: [
      'REST API design',
      'Django app architecture',
      'Security and testing best practices',
    ],
    image: '/certificates/django.svg',
    link: '/certificates/django.svg',
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 text-shadow">Certifications & Achievements</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-3xl mx-auto px-4">
            Explore the certifications that prove my technical foundations, enterprise experience, and ability to deliver smart solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <article
              key={cert.id}
              className={`glass-effect rounded-3xl p-6 card-shadow transition-all duration-500 ${
                index % 3 === 0 ? 'fade-in' : index % 3 === 1 ? 'fade-in-delayed' : 'slide-in-right'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] text-blue-700 dark:text-blue-300 font-semibold">
                    {cert.topic}
                  </p>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-200">
                  {cert.issuer}
                </span>
              </div>

              <p className="text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300 mb-6">
                {cert.description}
              </p>

              <ul className="space-y-3 mb-6 text-sm text-slate-600 dark:text-slate-300">
                {cert.highlights.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <div className="rounded-3xl bg-slate-100 dark:bg-slate-900/80 p-4 border border-slate-200 dark:border-slate-700">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">Issued</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{cert.date}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="btn-primary w-full text-center"
                >
                  View Certificate
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-slate-900">
            <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 dark:border-slate-800 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300 font-semibold">Certificate Preview</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{selectedCert.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{selectedCert.topic} • {selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] p-6">
              <div className="rounded-[1.75rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5">
                <div className="rounded-3xl bg-slate-100 p-6 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Description</p>
                  <p className="mt-3 text-slate-700 dark:text-slate-200 leading-7">{selectedCert.description}</p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-6 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Highlights</p>
                  <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
                    {selectedCert.highlights.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex items-center justify-center w-full"
                  >
                    Open Certificate
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
