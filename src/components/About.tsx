import { personalData } from '../data/data';
import profilePic from '../assets/images/photos/ProfilePic.jpg';

const About: React.FC = () => {
    const handleDownloadCV = (e: React.MouseEvent) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/src/assets/cv/Nipun_Sathsara_Resume.pdf';
        link.download = 'Nipun_Sathsara_Resume.pdf';
        link.click();
    };

    return (
        <section id="about" className="about-section bg-white">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary">About Me</h2>
                    <div className="title-underline w-20 h-1 bg-accent mx-auto mt-4 relative before:content-[''] before:absolute before:w-5 before:h-1 before:bg-secondary before:-left-5 before:top-0 after:content-[''] after:absolute after:w-5 after:h-1 after:bg-secondary after:-right-5 after:top-0"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                    <div className="about-image mb-6 lg:mb-0" data-aos="fade-right" data-aos-delay="200">
                        <img src={profilePic} alt="Profile Picture" className="w-full rounded-2xl shadow-custom -rotate-3 transition-all duration-300 hover:-translate-y-2 hover:rotate-0" loading="lazy" />
                        <div className="experience-badge absolute bottom-5 right-0 bg-accent text-white px-4 py-2 rounded-xl text-center rotate-2 transition-all duration-300 hover:rotate-0">
                            <span className="number text-xl font-bold">{personalData.experience}</span>
                            <span className="text block text-xs uppercase">Years Coding</span>
                        </div>
                    </div>
                    <div className="about-content" data-aos="fade-left" data-aos-delay="200">
                        <h3 className="text-2xl font-bold text-primary mb-4">Software Engineering Student</h3>
                        <p className="lead text-lg text-text-dark">
                            Hi, I'm <strong>{personalData.fullName}</strong>, a passionate {personalData.age}-year-old Software Engineering student from {personalData.location}.
                        </p>
                        <p className="text-text-light leading-relaxed mt-2">{personalData.bio}</p>
                        <div className="personal-info mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="info-item flex items-baseline mb-3">
                                    <span className="info-title font-semibold text-primary min-w-20">Name:</span>
                                    <span className="info-value text-text-light">{personalData.fullName}</span>
                                </div>
                                <div className="info-item flex items-baseline mb-3">
                                    <span className="info-title font-semibold text-primary min-w-20">Age:</span>
                                    <span className="info-value text-text-light">{personalData.age}</span>
                                </div>
                            </div>
                            <div>
                                <div className="info-item flex items-baseline mb-3">
                                    <span className="info-title font-semibold text-primary min-w-20">Location:</span>
                                    <span className="info-value text-text-light">{personalData.location}</span>
                                </div>
                                <div className="info-item flex items-baseline mb-3">
                                    <span className="info-title font-semibold text-primary min-w-20">Education:</span>
                                    <span className="info-value text-text-light">{personalData.education}</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-buttons mt-6 flex justify-center lg:justify-start gap-4">
                            <a href="#" className="btn btn-primary bg-secondary text-white px-6 py-3 rounded-md uppercase font-medium hover:bg-primary hover:-translate-y-1 transition-all duration-300" id="download-cv" onClick={handleDownloadCV}>
                                Download CV
                            </a>
                            <a href="#contact" className="btn btn-outline border-2 border-light text-light px-6 py-3 rounded-md uppercase font-medium hover:bg-light hover:text-primary hover:-translate-y-1 transition-all duration-300">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;