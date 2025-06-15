import { personalData } from '../data/data';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-gray-300 py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="mb-0">© {new Date().getFullYear()} {personalData.fullName}. All Rights Reserved.</p>
                    </div>
                    <div className="text-center md:text-right">
                        <div className="social-links flex justify-center gap-3">
                            {Object.entries(personalData.socialLinks).map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center text-base transition-all duration-300 hover:bg-accent hover:-translate-y-1"
                                    aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                                >
                                    <i className={`fab fa-${key === 'linkedin' ? 'linkedin-in' : key === 'facebook' ? 'facebook-f' : key}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;