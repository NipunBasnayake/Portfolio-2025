import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Star } from 'lucide-react';
import { projectsData, sectionsData } from '../data.js';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [displayCount, setDisplayCount] = useState(6);

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const visibleProjects = filteredProjects.slice(0, displayCount);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'desktop', label: 'Desktop' },
    { key: 'backend', label: 'Backend' },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {sectionsData.projects.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {sectionsData.projects.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setActiveFilter(category.key);
                setDisplayCount(6);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.viewButton && project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      project.viewButton && project.demoLink ? 'flex-1' : 'w-full'
                    } border-2 border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-700 hover:text-white hover:border-slate-700 transition-all duration-300 flex items-center justify-center`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects.length < filteredProjects.length && (
          <div className="text-center">
            <button
              onClick={() => setDisplayCount(displayCount + 6)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{projectsData.length}+</div>
              <div className="text-blue-100">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {projectsData.filter(p => p.category === 'web').length}
              </div>
              <div className="text-blue-100">Web Applications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {projectsData.filter(p => p.viewButton && p.demoLink).length}
              </div>
              <div className="text-blue-100">Live Demos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;