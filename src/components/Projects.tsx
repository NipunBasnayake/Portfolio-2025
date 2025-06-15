import { useState } from 'react';
import { projectsData } from '../data/data';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (category: string) => {
        setFilter(category);
    };

    return (
        <section id="projects" className="projects-section bg-white">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary">My Projects</h2>
                    <div className="title-underline w-20 h-1 bg-accent mx-auto mt-4 relative before:content-[''] before:absolute before:w-5 before:h-1 before:bg-secondary before:-left-5 before:top-0 after:content-[''] after:absolute after:w-5 after:h-1 after:bg-secondary after:-right-5 after:top-0"></div>
                    <p className="section-description text-lg text-text-light max-w-xl mx-auto mt-4">Check out some of my recent work</p>
                </div>
                <div className="project-filter text-center mb-8" data-aos="fade-up">
                    {['all', 'web', 'mobile', 'desktop'].map((category) => (
                        <button
                            key={category}
                            className={`btn filter-btn px-4 py-2 mx-2 font-medium text-sm rounded-full transition-all duration-300 ${filter === category ? 'bg-secondary text-white' : 'bg-transparent text-text-dark hover:bg-secondary hover:text-white'}`}
                            onClick={() => handleFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="project-container">
                    {projectsData
                        .filter((project) => filter === 'all' || project.category === filter)
                        .map((project, index) => (
                            <div
                                key={project.title}
                                className={`project-item ${project.category} ${project.featured ? 'featured' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={`${((index % 3) + 1) * 100}`}
                            >
                                <div className="project-card rounded-2xl shadow-custom bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-hover relative">
                                    {project.featured && (
                                        <span className="absolute top-4 -right-8 bg-accent text-white px-8 py-1 text-xs rotate-45">Featured</span>
                                    )}
                                    <div className="project-img h-56 relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                                            loading="lazy"
                                            onError={(e) => (e.currentTarget.src = project.defaultImage)}
                                        />
                                        <div className="project-overlay absolute inset-0 bg-dark/80 flex items-center justify-center opacity-0 transition-all duration-300 hover:opacity-100">
                                            <div className="project-links flex gap-4">
                                                {project.viewButton && (
                                                    <a
                                                        href={project.demoLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-lg opacity-0 translate-y-5 transition-all duration-300 hover:bg-secondary hover:opacity-100 hover:translate-y-0"
                                                    >
                                                        <i className="fas fa-eye"></i>
                                                    </a>
                                                )}
                                                <a
                                                    href={project.codeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-lg opacity-0 translate-y-5 transition-all duration-300 hover:bg-secondary hover:opacity-100 hover:translate-y-0"
                                                >
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-info p-4">
                                        <div className="project-tags flex flex-wrap gap-2 mb-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="project-tag px-3 py-1 text-xs bg-card-2-bg-light text-secondary rounded-full">
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                        <h4 className="project-title text-lg font-semibold text-primary mb-2 line-clamp-1">{project.title}</h4>
                                        <p className="project-description text-sm text-text-light line-clamp-3">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="text-center mt-6" data-aos="fade-up">
                    <a
                        href="https://github.com/NipunBasnayake"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary bg-secondary text-white px-6 py-3 rounded-md uppercase font-medium hover:bg-primary hover:-translate-y-1 transition-all duration-300"
                    >
                        <i className="fab fa-github mr-2"></i> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;