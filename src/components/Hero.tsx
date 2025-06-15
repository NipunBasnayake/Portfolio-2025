import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { personalData, particlesConfig } from '../data/data';
import profileIllustration from '../assets/images/photos/profile_Illustration.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        let typed: Typed | undefined;

        if (typedRef.current) {
            typed = new Typed(typedRef.current, {
                strings: personalData.roles,
                typeSpeed: 70,
                backSpeed: 35,
                backDelay: 1600,
                startDelay: 400,
                loop: true,
                showCursor: true,
                smartBackspace: true,
            });
        }

        return () => {
            typed?.destroy();
        };
    }, []);

    const particlesInit = async (engine: Engine) => {
        await loadFull(engine);
    };

    return (
        <section
            id="hero"
            className="hero-section bg-gradient-to-b from-dark/90 to-dark/90 text-light relative min-h-screen flex items-center"
        >
            <Particles
                id="particles-js"
                init={particlesInit}
                options={particlesConfig}
                className="absolute inset-0"
            />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="hero-content text-center lg:text-left" data-aos="fade-right">
                        <h1 className="text-4xl md:text-5xl font-bold mb-5">
                            Hi, I'm{' '}
                            <span className="highlight text-accent relative after:content-[''] after:absolute after:w-full after:h-1/3 after:bg-accent/20 after:bottom-1 after:left-0">
                                {personalData.firstName}
                            </span>
                        </h1>
                        <div className="typewriter text-lg md:text-xl font-mono mb-2 min-h-10">
                            <span ref={typedRef}></span>
                        </div>
                        <div className="hero-buttons mt-6 flex justify-center lg:justify-start gap-4">
                            <a
                                href="#projects"
                                className="btn btn-primary bg-secondary text-white px-6 py-3 rounded-md uppercase font-medium hover:bg-primary hover:-translate-y-1 transition-all duration-300"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="btn btn-outline border-2 border-light text-light px-6 py-3 rounded-md uppercase font-medium hover:bg-light hover:text-primary hover:-translate-y-1 transition-all duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="text-center" data-aos="fade-left">
                        <img
                            src={profileIllustration}
                            alt="Profile Illustration"
                            className="max-w-full h-auto mx-auto"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="scroll-down absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <a
                    href="#about"
                    aria-label="Scroll to About section"
                    className="text-light text-xl animate-bounce"
                >
                    <i className="fas fa-chevron-down"></i> {/* Ensure FontAwesome CSS is loaded */}
                </a>
            </div>
        </section>
    );
};

export default Hero;
