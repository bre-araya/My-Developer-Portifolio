export default function Experience() {
  const experiences = [
    {
      company: "Niyat Consultancy & Software Company",
      position: "Odoo Developer",
      period: "September 2025 - Present",
      description: "As an Odoo Developer, I design, customize, and maintain business management solutions that streamline workflows and improve operational efficiency. I collaborate with cross-functional teams to develop scalable ERP modules, integrate third-party services, and deliver reliable business applications tailored to client requirements.",
      achievements: [
        "Developed and customized Odoo modules using Python and the Odoo framework to meet diverse business requirements",
        "Designed and extended ERP functionalities across Sales, Purchase, Inventory, Accounting, HR, CRM, and other business modules",
        "Built custom models, views, reports, workflows, and automated business processes",
        "Created REST API integrations with external systems and third-party services for seamless data exchange",
        "Implemented backend business logic with clean, maintainable, and scalable code following software engineering best practices"
      ],
      technologies: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript", "REST APIs", "Git"]
    },
    {
      company: "Geez EdTech",
      position: "Software Developer Intern (Backend Developer)",
      period: "June 2025 - September 2025",
      description: "Worked as a Backend Developer, contributing to the development of scalable web applications using the MERN stack. Collaborated with frontend developers and senior engineers to build secure APIs, manage databases, and implement backend business logic for real-world applications.",
      achievements: [
        "Developed RESTful APIs using Node.js and Express.js",
        "Designed and managed MongoDB databases with efficient schema design and query optimization",
        "Implemented backend business logic, authentication, and authorization using JWT",
        "Integrated frontend applications with backend services to ensure seamless data flow",
        "Built CRUD operations and optimized API performance for scalability and reliability"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "REST APIs", "JWT", "Git", "GitHub"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">Professional Experience</h2>
          <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 mt-4 max-w-3xl mx-auto px-4">
            My journey in software development, from enterprise solutions to innovative web applications
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className={`relative flex items-start ${index % 2 === 0 ? 'fade-in' : 'fade-in-delayed'}`}>
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>

                <div className="ml-12 md:ml-16 glass-effect rounded-2xl p-5 md:p-8 card-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1 md:mb-2">{exp.position}</h3>
                      <h4 className="text-base md:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-1">{exp.company}</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base">{exp.period}</p>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <span className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-950/50 dark:to-blue-950/50 text-green-800 dark:text-green-300 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                        {exp.technologies.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>

                  <div className="mb-4 md:mb-6">
                    <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 md:mb-3 text-sm md:text-base">Key Achievements:</h5>
                    <ul className="space-y-1 md:space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 md:mr-3 mt-0.5 text-sm">✓</span>
                          <span className="text-slate-600 dark:text-slate-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/60 dark:to-purple-950/60 text-blue-800 dark:text-blue-200 text-xs md:text-sm font-medium px-2 md:px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
