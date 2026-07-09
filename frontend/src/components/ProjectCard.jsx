import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  liveLink,
  githubLink,
  featured = false
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`glass-effect rounded-2xl overflow-hidden card-shadow transition-all duration-500 ${
        featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
            <div className="text-6xl opacity-50">🚀</div>
          </div>
        )}

        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {(liveLink || githubLink) && (
            <a
              href={liveLink || githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Project
            </a>
          )}
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:from-slate-800 dark:to-slate-700 dark:text-slate-200 dark:border-slate-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action button */}
        {(liveLink || githubLink) && (
          <a
            href={liveLink || githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2.5 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-lift"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
