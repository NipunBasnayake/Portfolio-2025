import { mainSkillAreas } from '../data/data';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills-section bg-light">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary">My Skills</h2>
                    <div className="title-underline w-20 h-1 bg-accent mx-auto mt-4 relative before:content-[''] before:absolute before:w-5 before:h-1 before:bg-secondary before:-left-5 before:top-0 after:content-[''] after:absolute after:w-5 after:h-1 after:bg-secondary after:-right-5 after:top-0"></div>
                    <p className="section-description text-lg text-text-light max-w-xl mx-auto mt-4">A showcase of my technical expertise and proficiency</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="main-skill-areas">
                    {mainSkillAreas.map((area, index) => (
                        <div key={area.title} className="mb-6" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                            <div className="skill-area-card bg-white rounded-xl shadow-custom p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-hover">
                                <div className="skill-area-header flex items-center mb-4">
                                    <div className={`skill-area-icon w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${['bg-card-1-bg-light', 'bg-card-2-bg-light', 'bg-card-3-bg-light', 'bg-card-4-bg-light'][index]} hover:bg-${['card-1-color', 'card-2-color', 'card-3-color', 'card-4-color'][index]} hover:text-white hover:rotate-y-180`}>
                                        <i className={`fas ${area.icon} text-lg ${['text-card-1-color', 'text-card-2-color', 'text-card-3-color', 'text-card-4-color'][index]}`}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary ml-3">{area.title}</h3>
                                </div>
                                <p className="skill-area-description text-sm text-text-light mb-4">{area.description}</p>
                                <div className="skill-area-tags flex flex-wrap gap-2">
                                    {area.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`skill-badge px-3 py-1 text-xs rounded-full transition-all duration-300 ${['bg-card-1-bg-light text-card-1-color hover:bg-card-1-color', 'bg-card-2-bg-light text-card-2-color hover:bg-card-2-color', 'bg-card-3-bg-light text-card-3-color hover:bg-card-3-color', 'bg-card-4-bg-light text-card-4-color hover:bg-card-4-color'][index]} hover:text-white hover:-translate-y-1 hover:shadow-md`}
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;