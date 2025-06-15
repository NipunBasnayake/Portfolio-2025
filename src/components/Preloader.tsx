import { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + Math.floor(Math.random() * 15);
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            id="preloader"
            className="fixed inset-0 bg-dark flex items-center justify-center z-50 transition-opacity duration-500"
        >
            <div className="loader flex space-x-2">
                <span className="w-5 h-5 bg-primary rounded-full animate-[loader_1s_infinite]"></span>
                <span className="w-5 h-5 bg-secondary rounded-full animate-[loader_1s_0.2s_infinite]"></span>
                <span className="w-5 h-5 bg-accent rounded-full animate-[loader_1s_0.4s_infinite]"></span>
            </div>
            <div
                id="loading-text"
                className="absolute bottom-1/4 text-light text-sm tracking-widest uppercase"
            >
                LOADING...
            </div>
            <div
                id="progress-bar"
                className="absolute bottom-[20%] w-[250px] h-[3px] bg-white/10 rounded-full overflow-hidden"
            >
                <div
                    id="progress-fill"
                    className="h-full bg-accent rounded-full transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Preloader;
