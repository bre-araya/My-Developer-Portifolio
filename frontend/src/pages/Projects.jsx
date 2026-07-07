import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Plant Disease Detection System",
      description: "An AI-powered web application that uses machine learning to detect plant diseases from leaf images. Features real-time analysis, disease identification, and treatment recommendations for farmers and agricultural professionals.",
      tech: ["React", "Python", "TensorFlow", "Flask", "MongoDB"],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
      liveLink: "https://plant-disease-detection-demo.vercel.app",
      githubLink: "https://github.com/berihu-araya/plant-disease-detection",
      featured: true
    },
    {
      title: "ERP System with Odoo Customization",
      description: "Customized Odoo ERP modules for inventory management, sales tracking, and financial reporting. Implemented automated workflows, custom dashboards, and integrated third-party APIs for enhanced business operations.",
      tech: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      liveLink: "https://erp-system-demo.vercel.app",
      githubLink: "https://github.com/berihu-araya/odoo-erp-customization",
      featured: true
    },
    {
      title: "MERN E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, product management, shopping cart, payment integration, and admin dashboard. Features real-time inventory updates and order tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveLink: "https://mern-ecommerce-demo.vercel.app",
      githubLink: "https://github.com/berihu-araya/mern-ecommerce"
    },
    {
      title: "AI Chatbot for Customer Support",
      description: "Intelligent chatbot built with natural language processing for automated customer support. Integrates with existing CRM systems and provides 24/7 customer assistance with human handoff capabilities.",
      tech: ["Python", "Django", "NLP", "Dialogflow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      liveLink: "https://ai-chatbot-demo.vercel.app",
      githubLink: "https://github.com/berihu-araya/ai-chatbot"
    },
    {
      title: "Real Estate Management System",
      description: "Comprehensive property management platform with listing management, tenant tracking, maintenance requests, and financial reporting. Includes mobile-responsive design and automated rent collection.",
      tech: ["React", "Django REST", "PostgreSQL", "AWS S3", "Stripe"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      liveLink: "https://real-estate-management-demo.vercel.app",
      githubLink: "https://github.com/berihu-araya/real-estate-management"
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with real-time updates, team collaboration features, progress tracking, and automated reporting. Built with modern UI/UX principles and scalable architecture.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      liveLink: "https://task-management-demo.vercel.app",
      githubLink: "https://github.com/berihu-araya/task-management-dashboard"
    }
  ];

  return (
    <section className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-10 md:mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">Featured Projects</h2>
        <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
        <p className="text-base md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto px-4">
          A showcase of my recent work spanning web development, AI/ML, and enterprise solutions
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${
              index % 3 === 0 ? 'fade-in' :
              index % 3 === 1 ? 'fade-in-delayed' : 'slide-in-right'
            }`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              featured={project.featured}
            />
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16 fade-in">
        <div className="glass-effect rounded-2xl p-8 card-shadow max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in Working Together?</h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
            Let's create something amazing together!
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
