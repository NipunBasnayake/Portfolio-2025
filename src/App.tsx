import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Certifications from './components/Certifications.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import BackToTop from './components/BackToTop.tsx';
import Preloader from './components/Preloader.tsx';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            offset: 100,
            disable: window.innerWidth < 768,
        });

        const timer = setInterval(() => {
            setLoading(false);
            document.body.style.overflow = 'visible';
            clearInterval(timer);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Router>
            {loading && <Preloader />}
            <Navbar />
            <main id="main-content" role="main">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </Router>
    );
};

export default App;