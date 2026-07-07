export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "TechCorp Solutions",
      message: "Berihu delivered exceptional work on our MERN stack project. His attention to detail and problem-solving skills were outstanding. The application he built exceeded our expectations and has been running smoothly ever since.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "StartupXYZ",
      message: "Working with Berihu was a great experience. He quickly understood our requirements and delivered a scalable Odoo solution that perfectly fit our business needs. Highly recommended for enterprise applications.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      position: "Freelance Client",
      company: "Independent",
      message: "Berihu helped me build a custom web application from scratch. His expertise in both frontend and backend technologies, combined with his professional communication, made the entire process smooth and successful.",
      avatar: "ER"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">What Clients Say</h2>
          <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-base md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto px-4">
            Don't just take my word for it - here's what clients and colleagues have to say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`glass-effect rounded-2xl p-5 md:p-8 card-shadow ${
                index % 3 === 0 ? 'fade-in' :
                index % 3 === 1 ? 'fade-in-delayed' : 'slide-in-right'
              }`}
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mr-3 md:mr-4 flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{testimonial.position}</p>
                  <p className="text-blue-600 text-xs md:text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <div className="flex text-yellow-400 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg md:text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic text-sm md:text-base">
                  "{testimonial.message}"
                </p>
              </div>

              <div className="border-t border-gray-200 pt-3 md:pt-4">
                <p className="text-gray-500 text-xs md:text-sm">Verified Client</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 md:mt-16 fade-in">
          <div className="glass-effect rounded-2xl p-6 md:p-8 card-shadow max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Ready to Work Together?</h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Join the list of satisfied clients who have brought their ideas to life with my expertise.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
