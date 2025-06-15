import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BackToTop: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Link
            to="/hero"
            className={`back-to-top fixed bottom-5 right-5 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-lg transition-all duration-300 z-50 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'} hover:bg-primary hover:-translate-y-1`}
            aria-label="Back to Top"
        >
            <i className="fas fa-arrow-up"></i>
        </Link>
    );
};

export default BackToTop;