const personalData = {
    firstName: "Nipun",
    lastName: "Sathsara Basnayake",
    fullName: "Nipun Sathsara Basnayake",
    age: 25,
    location: "Negombo, Sri Lanka",
    email: "nipunsathsara1999@gmail.com",
    phone: "+94 77 880 6029",
    education: "UCSC Undergraduate",
    bio: "Hi, I'm Nipun Sathsara Basnayake, a passionate 25-year-old Software Engineering student from Negombo, Sri Lanka. I am currently pursuing my Bachelor's degree in Information Technology at the University of Colombo School of Computing (UCSC). With a keen interest in developing innovative software solutions, I aim to blend creativity and technical expertise to build impactful applications. Whether it's solving complex problems or learning new technologies, I'm driven to grow as a professional in the field of software engineering.",
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
        description: "Crafting responsive, accessible, and visually engaging user interfaces using modern frameworks and libraries.",
        skills: [
            "HTML5", "CSS3", "JavaScript", "React", "Angular", "Bootstrap", "Tailwind CSS",
            "Three.js", "Particles.js", "TypeScript", "SASS", "jQuery", "Figma"
        ]
    },
    {
        title: "Backend & Databases",
        icon: "fa-server",
        description: "Building robust backend systems and managing relational and NoSQL databases for scalable applications.",
        skills: [
            "Java", "Spring Boot", "PHP", "Node.js", "Python", "RESTful APIs", "JPA",
            "Hibernate", "Kafka", "MySQL", "MongoDB", "SQL", "NoSQL"
        ]
    },
    {
        title: "Mobile & Cloud Technologies",
        icon: "fa-mobile-alt",
        description: "Developing mobile applications and integrating cloud-based services for seamless, real-time access.",
        skills: [
            "Android Studio", "React Native", "Firebase", "Git", "Docker", "AWS", "Azure",
            "Expo", "Figma", "Kotlin", "CI/CD", "Google Play Console", "REST APIs"
        ]
    },
    {
        title: "Tools & Methodologies",
        icon: "fa-tools",
        description: "Applying agile workflows and leveraging modern tools to streamline development and collaboration.",
        skills: [
            "Postman", "Agile Methodology", "JIRA", "VS Code", "IntelliJ IDEA", "Eclipse",
            "GitHub", "Trello", "Maven", "Gradle", "Slack", "Bitbucket", "Scrum"
        ]
    }
];

const projectsData = [
    {
        "title": "HR Management System",
        "description": "Full-featured HR system with secure login, REST APIs, and Angular Material UI, built using Spring Boot and JPA.",
        "image": "Screenshots/app_screenshot.jpg",
        "defaultImage": "assets/images/projects/hrmanagement.jpg",
        "tags": ["Spring Boot", "JPA", "BCrypt", "JWT", "Angular", "Angular Material"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/HrManagementSystem-Angular-Springboot",
        "category": "web",
        "featured": true,
        "viewButton": false
    },
    {
        "title": "Task Manager Application",
        "description": "Full-stack task manager app with Angular and Spring Boot, including JWT authentication and Docker support.",
        "image": "Screenshots/app_screenshot.jpg",
        "defaultImage": "assets/images/projects/taskmanager.jpg",
        "tags": ["Spring Boot", "JPA", "BCrypt", "JWT", "Angular", "Angular Material", "Docker"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/TaskManager-Angular-Springboot",
        "category": "web",
        "featured": true,
        "viewButton": false
    },
    {
        "title": "Java Microservices with Kafka",
        "description": "Event-driven system with 3 microservices using Spring Boot and Apache Kafka for seamless communication and real-time data synchronization.",
        "image": "Screenshots/app_screenshot.jpg",
        "defaultImage": "assets/images/projects/microservices.jpg",
        "tags": ["Spring Boot", "Apache Kafka", "Microservices", "RESTful API", "MySQL", "Java", "Maven"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/Java-Springboot-Microservices",
        "category": "backend",
        "featured": true,
        "viewButton": false
    },    
    {
        "title": "Digital Tug Of War Game",
        "description": "Real-time multiplayer Tug of War game using React, Spring Boot, and WebSocket for live interactive gameplay.",
        "image": "Screenshots/app_screenshot.jpg",
        "defaultImage": "assets/images/projects/tugofwar.jpg",
        "tags": ["ReactJS", "Spring Boot", "WebSocket", "STOMP", "SockJS", "Java", "CSS", "Maven"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/Digital-Tug-Of-War-Game",
        "category": "web",
        "featured": true,
        "viewButton": false
    },
    {
        "title": "MOS Burgers Ordering System",
        "description": "Ordering system for MOS Burgers using Spring Boot and Bootstrap, with REST APIs and encrypted credentials.",
        "image": "Screenshots/app_screenshot.jpg",
        "defaultImage": "assets/images/projects/mosburgers.jpg",
        "tags": ["Spring Boot", "JPA", "Jasypt", "HTML", "CSS", "JavaScript", "Bootstrap"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/MOS_Burgers",
        "category": "web",
        "featured": true,
        "viewButton": false
    },
    {
        "title": "Clothify Store POS System",
        "description": "JavaFX-based POS system for clothing stores with secure login, inventory tracking, and layered architecture.",
        "image": "Screenshots/main_screen.png",
        "defaultImage": "assets/images/projects/clothify.jpg",
        "tags": ["JavaFX", "Layered Architecture", "Hibernate", "Google Guice"],
        "demoLink": "",
        "codeLink": "https://github.com/NipunBasnayake/Clothify-Store-JavaFX",
        "category": "desktop",
        "featured": true,
        "viewButton": false
    },
    {
        "title": "ChatterAI",
        "description": "AI chatbot using Gemini AI and Google AI Studio, offering real-time chats with a responsive modern UI.",
        "image": "assets/images/projects/chatterai.jpg",
        "defaultImage": "https://via.placeholder.com/400x250/3498db/ffffff?text=ChatterAI",
        "tags": ["HTML", "CSS", "JavaScript", "AI", "Chatbot", "Google AI Studio"],
        "demoLink": "https://nipunbasnayake.github.io/ChatteraAI/",
        "codeLink": "https://github.com/NipunBasnayake/ChatteraAI",
        "category": "web",
        "featured": true,
        "viewButton": false
    },
    // {
    //     "title": "LangEase Translator",
    //     "description": "Language translator using MyMemory API with speech synthesis, dynamic language switching, and responsive UI.",
    //     "image": "assets/projects/langease.jpg",
    //     "defaultImage": "assets/images/projects/langease.jpg",
    //     "tags": ["HTML", "CSS", "JavaScript", "Bootstrap", "MyMemory Translated API", "Speech Synthesis"],
    //     "demoLink": "https://nipunbasnayake.github.io/LangEase-Translator/",
    //     "codeLink": "https://github.com/NipunBasnayake/LangEase-Translator",
    //     "category": "web",
    //     "featured": true,
    //     "viewButton": false
    // },
    {
        "title": "Vehicle Service Management System",
        "description": "Web app to manage vehicle services, users, and roles using PHP, Bootstrap, and a MySQL database backend.",
        "image": "assets/projects/vsms.jpg",
        "defaultImage": "assets/images/projects/service.jpg",
        "tags": ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL"],
        "demoLink": "https://nipunbasnayake.github.io/Vehicle-Service-Management-System/",
        "codeLink": "https://github.com/NipunBasnayake/Vehicle-Service-Management-System",
        "category": "web",
        "featured": true,
        "viewButton": false
    },
    {
        "title": "Checkmate 3D",
        "description": "A 3D chess game using Three.js with smooth animation, realistic lighting, and Stockfish engine integration.",
        "image": "assets/projects/checkmate3d.jpg",
        "defaultImage": "assets/images/projects/checkmate3d.jpg",
        "tags": ["Three.js", "JavaScript", "Three Js", "3D Graphics", "StockFish", "WebGL"],
        "demoLink": "https://nipunbasnayake.github.io/CheckMate3D",
        "codeLink": "https://github.com/NipunBasnayake/CheckMate3D",
        "category": "web",
        "featured": true,
        "viewButton": false
    }
];

const certificationsData = [
    {
        title: "Postman API Student Expert",
        issuer: "Postman",
        date: "May 2024",
        description: "Validated expertise in API design, development, testing, and documentation using Postman tools.",
        badge: "assets/images/certifications/postman-api-student-expert-badge.png",
        verificationLink: "https://badgr.com/public/assertions/YOUR_BADGE_LINK"
    },
    {
        title: "Java Foundations Professional Certificate",
        issuer: "JetBrains",
        date: "May 2024",
        description: "Demonstrated foundational knowledge in Java programming including OOP, exception handling, and basic algorithms using JetBrains tools and IntelliJ IDEA.",
        badge: "assets/images/certifications/java-foundations-certificate.png",
        verificationLink: "https://www.linkedin.com/learning/certificates/e36c4c7cb4dce77da805f0a45442256721d076b9b6e5b9f5dd37e9a4cd7a9a1e?trk=share_certificate"
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