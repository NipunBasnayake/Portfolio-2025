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

const mainSkillAreas = [
    {
        title: "Frontend Development",
        icon: "fa-laptop-code",
        description: "Designing and developing responsive, accessible, and interactive user interfaces.",
        skills: [
            "HTML5", "CSS3", "JavaScript", "React", "Angular", "Bootstrap", "Tailwind CSS", "Three.js", "Particles.js"
        ]
    },
    {
        title: "Backend & Databases",
        icon: "fa-server",
        description: "Creating scalable server-side logic and managing reliable data storage systems.",
        skills: [
            "Java", "Spring Boot", "PHP", "Node.js", "Python", "RESTful APIs", "JPA", "Hibernate", "Kafka", "MySQL", "MongoDB", "SQL", "NoSQL"
        ]
    },
    {
        title: "Mobile & Cloud Technologies",
        icon: "fa-mobile-alt",
        description: "Building cross-platform mobile apps and deploying services to the cloud.",
        skills: [
            "Android Studio", "React Native", "Firebase", "Git", "Docker", "AWS"
        ]
    },
    {
        title: "Tools & Methodologies",
        icon: "fa-tools",
        description: "Utilizing modern tools and agile practices for efficient software development.",
        skills: [
            "Postman", "Agile Methodology", "JIRA", "Visual Studio Code", "IntelliJ IDEA", "Eclipse"
        ]
    }
];

const projectsData = [
    {
        "title": "MOS Burgers Ordering System",
        "description": "A comprehensive web application designed for MOS Burgers to streamline ordering and management processes. It features a Spring Boot backend with RESTful APIs, JPA for database interactions, Jasypt for password encryption, and a responsive frontend built with HTML, CSS, JavaScript, and Bootstrap.",
        "image": "Screenshots/app_screenshot.jpg",
        "defaultImage": "assets/images/projects/mosburgers.jpg",
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
        "defaultImage": "assets/images/projects/clothify.jpg",
        "tags": ["JavaFX", "Layered Architecture", "Hibernate", "Google Guice"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/Clothify-Store-JavaFX",
        "category": "desktop",
        "featured": true
    },
    {
        "title": "ChatterAI",
        "description": "An interactive web-based chat application that enables users to engage in real-time conversations with an AI chatbot powered by the Gemini AI model, offering contextually relevant responses and a modern user interface.",
        "image": "assets/images/projects/chatterai.jpg",
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
        "defaultImage": "assets/images/projects/langease.jpg",
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
        "defaultImage": "assets/images/projects/service.jpg",
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
        "defaultImage": "assets/images/projects/checkmate3d.jpg",
        "tags": ["Three.js", "JavaScript","Three Js", "3D Graphics", "StockFish", "WebGL"],
        "demoLink": "https://nipunbasnayake.github.io/CheckMate3D",
        "codeLink": "https://github.com/NipunBasnayake/CheckMate3D",
        "category": "web",
        "featured": true
    }
];

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
    certifications: {
        title: "Certifications",
        subtitle: "Professional certifications and achievements"
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Feel free to contact me for any project or collaboration",
        heading: "Let's Talk",
        description: "Have a project in mind or want to collaborate? Feel free to reach out using any of the methods below. I'll get back to you as soon as possible!"
    }
};

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
            speed: 1.2, 
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