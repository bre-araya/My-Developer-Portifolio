export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML, CSS, JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 75 }
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js & Express", level: 85 },
        { name: "Python & Django", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 }
      ],
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Databases & ERP",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL, SQLite", level: 75 },
        { name: "Odoo Development", level: 85 }
      ],
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">Technical Skills</h2>
          <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-base md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto px-4">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-effect rounded-2xl p-5 md:p-8 card-shadow ${
                index % 3 === 0 ? 'fade-in' : index % 3 === 1 ? 'fade-in-delayed' : 'slide-in-right'
              }`}
            >
              <div className="text-center mb-6 md:mb-8">
                <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${category.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl hover-bounce cursor-pointer`}>
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4 md:space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 text-sm md:text-base">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-10 md:mt-16 fade-in">
          <div className="glass-effect rounded-2xl p-6 md:p-8 card-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:text-center">Additional Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
              {[
                "Git & GitHub", "Docker", "AWS", "Linux", 
                "Postman", "VS Code", "Jira", "Agile Methodologies"

              ].map((tool, index) => (
                <div
                  key={tool}
                  className={`bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-3 py-2 md:px-4 md:py-3 rounded-xl text-center font-medium hover-shimmer cursor-pointer text-xs md:text-sm ${
                    index % 4 === 0 ? 'hover-lift' :
                    index % 4 === 1 ? 'hover-glow' :
                    index % 4 === 2 ? 'hover-bounce' : 'hover-rotate'
                  }`}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
