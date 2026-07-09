export default function Experience() {
  const experiences = [
    {
      company: "Niyat Consultancy & Software Company",
      position: "Odoo ERP Developer",
      period: "September 2025 - Present",
      description: "Developed and customized Odoo ERP solutions for Wagwago Business Group, building scalable business modules and automating workflows to improve operational efficiency across multiple business operations.",
      achievements: [
        "Designed and extended ERP functionalities across Sales, Purchase, Inventory, Accounting, HR, CRM, and other core business modules based on organizational requirements",
        "Built custom models, views, reports, workflows, and backend business logic using Python and the Odoo framework while following clean, maintainable, and scalable software engineering practices",
        "Integrated Odoo with external systems and third-party services through REST APIs, enabling secure and reliable data exchange between business applications",
        "Collaborated with cross-functional teams to deliver robust ERP solutions tailored to business processes and operational needs"
      ],
      technologies: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript", "Git"]
    },
    {
      company: "Geez EdTech",
      position: "Backend Developer",
      period: "June 2025 - September 2025",
      description: "Contributed to the development of scalable backend services for web applications using Node.js, Express.js, and MongoDB.",
      achievements: [
        "Designed and implemented secure RESTful APIs, backend business logic, authentication, and authorization using JWT",
        "Built and optimized MongoDB database schemas, CRUD operations, and API endpoints to ensure efficient data management and application performance",
        "Integrated frontend applications with backend services to provide seamless data flow and reliable user experiences",
        "Collaborated with frontend developers and senior engineers to deliver scalable, maintainable, and production-ready web applications"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React", "JavaScript", "REST APIs", "JWT", "Git", "GitHub"]
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="fade-in">
              <div className="glass-effect rounded-2xl p-6 md:p-8 card-shadow h-full hover:shadow-xl transition-shadow duration-300 border border-blue-200/50 dark:border-blue-900/50">
                {/* Header Section */}
                <div className="mb-6 pb-6 border-b border-blue-100 dark:border-blue-900/30">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{exp.position}</h3>
                  <h4 className="text-base md:text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{exp.company}</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
                    {exp.period}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <ul className="space-y-2 md:space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 md:mr-3 mt-0.5 flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white text-sm font-bold">✓</span>
                        <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-3 tracking-wide">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/60 dark:to-purple-950/60 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
