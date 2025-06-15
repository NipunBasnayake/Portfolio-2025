import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [sticky, setSticky] = useState(false);
    const [light, setLight] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const aboutSection = document.getElementById('about');
            const isAtHero = aboutSection ? scrollPosition < aboutSection.offsetTop - 100 : true;

            setSticky(scrollPosition > 50);
            setLight(scrollPosition > 50 && !isAtHero);

            const sections = document.querySelectorAll('section');
            let activeId = 'hero';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
                    activeId = section.getAttribute('id') || 'hero';
                }
            });
            setActiveSection(activeId);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && document.querySelector('.navbar-collapse')?.classList.contains('show')) {
            (navbarToggler as HTMLElement).click();
        }
    };

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark fixed-top transition-all duration-300 z-50 ${
                sticky ? 'py-2 bg-primary shadow-custom' : 'py-3'
            } ${light ? 'bg-white/95 light-navbar' : ''}`}
            id="main-navbar"
            role="navigation"
        >
            <div className="container mx-auto px-4">
                <Link
                    to="#hero"
                    className={`navbar-brand text-2xl font-bold relative ${light ? 'text-primary' : 'text-light'}`}
                    onClick={handleNavClick}
                >
                    NB
                    <span className="absolute w-2 h-2 bg-accent rounded-full bottom-1 -right-2"></span>
                </Link>
                <button
                    className="navbar-toggler border-none p-2 rounded-md bg-white/10"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center lg:text-left">
                        {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                            <li key={item} className="nav-item mx-2">
                                <Link
                                    to={`#${item.toLowerCase()}`}
                                    className={`nav-link text-base font-medium relative py-1 transition-all duration-300 ${
                                        light ? 'text-primary' : 'text-light'
                                    } ${activeSection === item.toLowerCase() ? 'text-accent' : ''}`}
                                    onClick={handleNavClick}
                                >
                                    {item}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                                            activeSection === item.toLowerCase() ? 'w-full' : 'w-0'
                                        }`}
                                    ></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;