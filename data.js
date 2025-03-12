// Personal Information
const personalData = {
    firstName: "Nipun",
    lastName: "Sathsara Basnayake",
    fullName: "Nipun Sathsara Basnayake",
    age: 25,
    location: "Negombo, Sri Lanka",
    email: "nipunsathsara1999@gmail.com",
    phone: "+94 77 880 6029",
    education: "UCSC Undergraduate",
    bio: "Hi, I'm Nipun Sathsara Basnayake, a passionate 24-year-old Software Engineering student from Negombo, Sri Lanka. I am currently pursuing my Bachelor's degree in Information Technology at the University of Colombo School of Computing (UCSC). With a keen interest in developing innovative software solutions, I aim to blend creativity and technical expertise to build impactful applications. Whether it's solving complex problems or learning new technologies, I'm driven to grow as a professional in the field of software engineering.",
    socialLinks: {
        github: "https://github.com/NipunBasnayake",
        linkedin: "https://www.linkedin.com/in/nipunbasnayake/",
        facebook: "https://www.facebook.com/nipun.s99?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/nipun__s/",
        whatsapp: "https://wa.me/94778806029"
    },
    roles: [
        "Full Stack Developer",
        "UCSC Undergraduate",
        "Java Developer",
        "React Developer",
        "Angular Developer",
        "Spring Boot Developer",
        "Problem Solver"
    ],
    experience: "1+"
};

// Main Skill Areas (4 categories)
const mainSkillAreas = [
    {
        title: "Frontend Development",
        icon: "fa-laptop-code",
        description: "Creating responsive and interactive user interfaces",
        skills: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Bootstrap", "Tailwind CSS", "Three Js", "Particle Js"]
    },
    {
        title: "Backend & Database",
        icon: "fa-server",
        description: "Building robust server-side applications and database systems",
        skills: ["Java", "Spring Boot", "PHP", "Node.js", "Python", "RESTful APIs", "MySQL", "MongoDB", "SQL", "NoSQL"]
    },
    {
        title: "Mobile & Cloud",
        icon: "fa-mobile-alt",
        description: "Developing mobile applications and cloud infrastructure",
        skills: ["Android Studio", "React Native", "Firebase", "Git", "Docker", "AWS"]
    },
    {
        title: "Tools & Methodologies",
        icon: "fa-tools",
        description: "Professional tools and development practices",
        skills: ["Postman", "Agile Methodology", "JIRA", "VS Code", "IntelliJ IDEA", "Eclipse"]
    }
];

// Projects data
const projectsData = [
    {
        "title": "MOS Burgers Ordering System",
        "description": "A comprehensive web application designed for MOS Burgers to streamline ordering and management processes. It features a Spring Boot backend with RESTful APIs, JPA for database interactions, Jasypt for password encryption, and a responsive frontend built with HTML, CSS, JavaScript, and Bootstrap.",
        "image": "Screenshots/app_screenshot.jpg",
        "defaultImage": "https://img.freepik.com/free-photo/fresh-grilled-hamburger-with-cheese-tomato-generative-ai_188544-12336.jpg?t=st=1741801528~exp=1741805128~hmac=ae89f02ccd277737d18a15c6a31a86c11ddd97a4aa350a8bbb118ea4e5a30744&w=1380",
        "tags": ["Spring Boot", "JPA", "Jasypt", "HTML", "CSS", "JavaScript", "Bootstrap"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/MOS_Burgers",
        "category": "web",
        "featured": true
    },
    {
        "title": "Clothify Store POS System",
        "description": "A JavaFX-based point-of-sale system designed for clothing stores, featuring secure authentication, inventory management, and detailed reporting.",
        "image": "Screenshots/main_screen.png",
        "defaultImage": "https://img.freepik.com/free-photo/fast-fashion-concept-with-full-clothing-store_23-2150871300.jpg?t=st=1741801732~exp=1741805332~hmac=e96f192f65da8c256edd639651b171e84f87027e2de581c5017dcd1c03daa4d8&w=1060",
        "tags": ["JavaFX", "Layered Architecture", "Hibernate", "Google Guice"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/Clothify-Store-JavaFX",
        "category": "desktop",
        "featured": true
    },
    {
        "title": "ChatterAI",
        "description": "An interactive web-based chat application that enables users to engage in real-time conversations with an AI chatbot powered by the Gemini AI model, offering contextually relevant responses and a modern user interface.",
        "image": "https://img.freepik.com/free-photo/man-hanging-out-with-robot_23-2151112183.jpg?t=st=1741801928~exp=1741805528~hmac=b0a995d1ad3ade17b8da381e53f4f8f6c8395201815e67ffca48e319e07af728&w=740",
        "defaultImage": "https://via.placeholder.com/400x250/3498db/ffffff?text=ChatterAI",
        "tags": ["HTML", "CSS", "JavaScript", "AI", "Chatbot", "Google AI Studio"],
        "demoLink": "https://nipunbasnayake.github.io/ChatteraAI/",
        "codeLink": "https://github.com/NipunBasnayake/ChatteraAI",
        "category": "web",
        "featured": true
    },
    {
        "title": "LangEase Translator",
        "description": "A web-based language translation app featuring dynamic language selection, instant translations via MyMemory API, and English speech synthesis with a clean, responsive UI.",
        "image": "assets/projects/langease.jpg",
        "defaultImage": "https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980100.jpg?t=st=1741802195~exp=1741805795~hmac=3b13c5d82b949af51ee0602a37f6c68614d731c841c67616c89b31a17c4e2fe6&w=740",
        "tags": ["HTML", "CSS", "JavaScript", "Bootstrap", "MyMemory Translated API", "Speech Synthesis"],
        "demoLink": "https://nipunbasnayake.github.io/LangEase-Translator/",
        "codeLink": "https://github.com/NipunBasnayake/LangEase-Translator",
        "category": "web",
        "featured": true
    },
    {
        "title": "Vehicle Service Management System",
        "description": "A comprehensive web-based solution to streamline vehicle service management, including service requests, vehicle details, service history, and user roles for vehicle owners, service centre staff, and admins.",
        "image": "assets/projects/vsms.jpg",
        "defaultImage": "https://img.freepik.com/free-photo/cartoon-ai-robot-character-scene_23-2151675048.jpg?t=st=1741802425~exp=1741806025~hmac=3218b1d88482ce4dc32fc416589916ea49f5b6cf49254aa997ee6bf070b70ad4&w=1380",
        "tags": ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL"],
        "demoLink": "https://nipunbasnayake.github.io/Vehicle-Service-Management-System/",
        "codeLink": "https://github.com/NipunBasnayake/Vehicle-Service-Management-System",
        "category": "web",
        "featured": true
    },
    {
        "title": "Checkmate 3D",
        "description": "An interactive 3D chess game built with Three.js, featuring realistic lighting, smooth animations, and intuitive controls.",
        "image": "assets/projects/checkmate3d.jpg",
        "defaultImage": "https://img.freepik.com/free-photo/abstract-chess-pieces-digital-art-style_23-2151476105.jpg?t=st=1741802629~exp=1741806229~hmac=88d07a0399850b83e78581cd0ec0a1501b439c72c6c3a58698e0e270883e35ca&w=1380",
        "tags": ["Three.js", "JavaScript","Three Js", "3D Graphics", "StockFish", "WebGL"],
        "demoLink": "https://nipunbasnayake.github.io/CheckMate3D",
        "codeLink": "https://github.com/NipunBasnayake/CheckMate3D",
        "category": "web",
        "featured": true
    }
];

// Section Content Data
const sectionsData = {
    hero: {
        subtitle: "Welcome to my portfolio",
        ctaButtons: [
            {
                text: "View My Work",
                link: "#projects",
                type: "primary"
            },
            {
                text: "Contact Me",
                link: "#contact",
                type: "outline"
            }
        ]
    },
    about: {
        title: "About Me",
        subtitle: "Software Engineering Student",
        ctaButtons: [
            {
                text: "Download CV",
                link: "#",
                type: "primary",
                id: "download-cv"
            },
            {
                text: "Get In Touch",
                link: "#contact",
                type: "outline"
            }
        ]
    },
    skills: {
        title: "My Skills",
        subtitle: "A showcase of my technical expertise and proficiency"
    },
    projects: {
        title: "My Projects",
        subtitle: "Check out some of my recent work",
        categories: ["all", "web", "mobile", "desktop"]
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Feel free to contact me for any project or collaboration",
        heading: "Let's Talk",
        description: "Have a project in mind or want to collaborate? Feel free to reach out using any of the methods below. I'll get back to you as soon as possible!"
    }
};

// Particle.js Configuration
const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.2, // Reduced from 2 to 0.5 for slower animation
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            },
        }
    },
    retina_detect: true
};