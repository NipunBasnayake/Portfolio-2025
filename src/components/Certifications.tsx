import { certificationsData } from '../data/data';

const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="certifications-section bg-light">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary">My Certifications</h2>
                    <div className="title-underline w-20 h-1 bg-accent mx-auto mt-4 relative before:content-[''] before:absolute before:w-5 before:h-1 before:bg-secondary before:-left-5 before:top-0 after:content-[''] after:absolute after:w-5 after:h-1 after:bg-secondary after:-right-5 after:top-0"></div>
                    <p className="section-description text-lg text-text-light max-w-xl mx-auto mt-4">Professional certifications and achievements</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="certifications-container">
                    {certificationsData.map((cert, index) => (
                        <div key={cert.title} className="mb-4" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                            <div className="certification-card bg-white rounded-xl shadow-custom p-5 flex flex-col md:flex-row items-center text-center md:text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-hover">
                                <div className="certification-badge w-20 h-20 min-w-20 rounded-xl overflow-hidden bg-white flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                                    <img
                                        src={cert.badge}
                                        alt={`${cert.title} Badge`}
                                        className="w-full h-auto object-contain"
                                        loading="lazy"
                                        onError={(e) => (e.currentTarget.src = '/src/assets/images/certifications/placeholder.webp')}
                                    />
                                </div>
                                <div className="certification-details">
                                    <h3 className="text-lg font-semibold text-primary mb-2">{cert.title}</h3>
                                    <div className="certification-meta flex flex-col md:flex-row gap-3 mb-2">
                    <span className="text-sm text-text-light flex items-center">
                      <i className="fas fa-award mr-2 text-secondary"></i> {cert.issuer}
                    </span>
                                        <span className="text-sm text-text-light flex items-center">
                      <i className="far fa-calendar-alt mr-2 text-secondary"></i> {cert.date}
                    </span>
                                    </div>
                                    <p className="certification-description text-sm text-text-light mb-2">{cert.description}</p>
                                    {cert.verificationLink && (
                                        <a
                                            href={cert.verificationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary bg-secondary text-white px-4 py-2 rounded-md text-sm uppercase font-medium hover:bg-primary hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <i className="fas fa-external-link-alt mr-2"></i> Verify Credential
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;