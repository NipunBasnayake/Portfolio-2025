import { useState } from 'react';
import { personalData } from '../data/data';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [alert, setAlert] = useState<{ message: string; type: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!navigator.onLine) {
            setAlert({ message: 'No internet connection. Please try again later.', type: 'danger' });
            return;
        }

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setAlert({ message: 'Please fill in all fields', type: 'danger' });
            return;
        }

        // Placeholder for form submission logic
        try {
            // Example: await fetch('https://formsubmit.co/nipunsathsara1999@gmail.com', { method: 'POST', body: new FormData(e.target as HTMLFormElement) });
            setAlert({ message: 'Your message has been sent successfully!', type: 'success' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch {
            setAlert({ message: 'Failed to send message. Please try again later.', type: 'danger' });
        }

        if (alert?.type !== 'danger') {
            setTimeout(() => setAlert(null), 5000);
        }
    };

    return (
        <section id="contact" className="contact-section bg-white">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary">Get In Touch</h2>
                    <div className="title-underline w-20 h-1 bg-accent mx-auto mt-4 relative before:content-[''] before:absolute before:w-5 before:h-1 before:bg-secondary before:-left-5 before:top-0 after:content-[''] after:absolute after:w-5 after:h-1 after:bg-secondary after:-right-5 after:top-0"></div>
                    <p className="section-description text-lg text-text-light max-w-xl mx-auto mt-4">Feel free to contact me for any project or collaboration</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="contact-info-wrapper bg-primary p-8 rounded-2xl text-white relative mb-8 lg:mb-0" data-aos="fade-right">
                        <div className="contact-heading mb-4">
                            <h3 className="text-2xl font-bold mb-3">Let's Talk</h3>
                            <p className="text-white/80 leading-relaxed">Have a project in mind or want to collaborate? Reach out below.</p>
                        </div>
                        <div className="contact-info">
                            <div className="contact-info-item flex items-start mb-4">
                                <div className="icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3 text-accent text-base transition-all duration-300 hover:bg-accent hover:text-white">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="details">
                                    <h5 className="text-base font-semibold mb-1">Email</h5>
                                    <p>
                                        <a href={`mailto:${personalData.email}`} className="text-white/80 hover:text-accent transition-all duration-300">
                                            {personalData.email}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="contact-info-item flex items-start mb-4">
                                <div className="icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3 text-accent text-base transition-all duration-300 hover:bg-accent hover:text-white">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="details">
                                    <h5 className="text-base font-semibold mb-1">Location</h5>
                                    <p className="text-white/80">{personalData.location}</p>
                                </div>
                            </div>
                            <div className="contact-info-item flex items-start mb-4">
                                <div className="icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3 text-accent text-base transition-all duration-300 hover:bg-accent hover:text-white">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="details">
                                    <h5 className="text-base font-semibold mb-1">Phone</h5>
                                    <p>
                                        <a href={`tel:${personalData.phone}`} className="text-white/80 hover:text-accent transition-all duration-300">
                                            {personalData.phone}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="social-links flex gap-3">
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
                    <div className="contact-form-wrapper bg-white p-8 rounded-2xl shadow-custom" data-aos="fade-left">
                        {alert && (
                            <div className={`alert alert-${alert.type} mt-3 p-4 rounded-md flex justify-between items-center ${alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {alert.message}
                                <button className="btn-close text-lg" onClick={() => setAlert(null)}>&times;</button>
                            </div>
                        )}
                        <form id="contact-form" aria-label="Contact Form" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="form-group">
                                    <label htmlFor="name" className="font-medium text-text-dark mb-1 block">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control w-full h-11 border border-gray-200 p-2 rounded-md bg-gray-50 text-base focus:border-secondary focus:bg-white transition-all duration-300"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="font-medium text-text-dark mb-1 block">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control w-full h-11 border border-gray-200 p-2 rounded-md bg-gray-50 text-base focus:border-secondary focus:bg-white transition-all duration-300"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="subject" className="font-medium text-text-dark mb-1 block">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="form-control w-full h-11 border border-gray-200 p-4 text-base rounded-md bg-white focus:border-secondary focus:bg-accent focus:ring-2"
                                    placeholder="Project Inquiry"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="font-medium text-text-dark mb-1 block">Your Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control w-full h-32 border border-gray-200 p-4 rounded-md bg-gray-50 text-base focus:border-secondary focus:bg-white transition-all duration-300"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary bg-secondary text-white px-10 py-3 rounded-md uppercase font-medium hover:bg-primary hover:-translate-y-1 transition-all duration-300 mt-4"
                                >
                                    <i className="fas fa-paper-plane mr-2"></i> Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;