export default function Experience() {
  const experiences = [
    {
      company: "Niyat Consultancy & Software Company",
      position: "Software Developer",
      period: "2023 - Present",
      description: "Developed and maintained backend APIs, ERP systems, and scalable web applications using modern technologies. Implemented full-stack solutions with Node.js, Django, and various databases.",
      achievements: [
        "Built RESTful APIs serving 10,000+ requests daily",
        "Customized Odoo ERP modules for client requirements",
        "Optimized database queries improving performance by 40%",
        "Collaborated with cross-functional teams on enterprise solutions"
      ],
      technologies: ["Node.js", "Django", "PostgreSQL", "MongoDB", "Odoo"]
    },
    {
      company: "Freelance Developer",
      position: "Full-Stack Developer",
      period: "2022 - 2023",
      description: "Delivered custom web applications and software solutions for various clients. Specialized in MERN stack development and Python backend services.",
      achievements: [
        "Completed 15+ client projects with 100% satisfaction rate",
        "Developed AI-powered chatbot for customer support",
        "Created plant disease detection platform using machine learning",
        "Implemented secure authentication systems"
      ],
      technologies: ["React", "Node.js", "Python", "MongoDB", "TensorFlow"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">Professional Experience</h2>
          <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-base md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto px-4">
            My journey in software development, from enterprise solutions to innovative web applications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - adjusted for mobile */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className={`relative flex items-start ${index % 2 === 0 ? 'fade-in' : 'fade-in-delayed'}`}>
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="ml-12 md:ml-16 glass-effect rounded-2xl p-5 md:p-8 card-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">{exp.position}</h3>
                      <h4 className="text-base md:text-xl text-blue-600 font-semibold mb-1">{exp.company}</h4>
                      <p className="text-gray-500 font-medium text-sm md:text-base">{exp.period}</p>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                        {exp.technologies.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>

                  <div className="mb-4 md:mb-6">
                    <h5 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Key Achievements:</h5>
                    <ul className="space-y-1 md:space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 md:mr-3 mt-0.5 text-sm">✓</span>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs md:text-sm font-medium px-2 md:px-3 py-1 rounded-full border border-blue-200"
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
