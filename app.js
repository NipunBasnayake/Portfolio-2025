const skillsData = [
    {
        category: "Frontend Development",
        icon: "fa-laptop-code",
        skills: [
            { name: "HTML5", image: "assets/icons/html5.png", progress: 90 },
            { name: "CSS3", image: "assets/icons/css3.png", progress: 85 },
            { name: "JavaScript", image: "assets/icons/js.png", progress: 80 },
            { name: "Bootstrap", image: "assets/icons/bootstrap.png", progress: 85 },
            { name: "React", image: "assets/icons/react.png", progress: 75 },
            { name: "Angular", image: "assets/icons/angular.png", progress: 70 },
            { name: "Tailwind CSS", image: "assets/icons/tailwind.png", progress: 75 }
        ]
    },
    {
        category: "Backend Development",
        icon: "fa-server",
        skills: [
            { name: "Java", image: "assets/icons/java.png", progress: 85 },
            { name: "Spring Boot", image: "assets/icons/springboot.png", progress: 80 },
            { name: "PHP", image: "assets/icons/php.png", progress: 75 },
            { name: "Node.js", image: "assets/icons/nodejs.png", progress: 65 },
            { name: "Python", image: "assets/icons/python.png", progress: 70 }
        ]
    },
    {
        category: "Database & Tools",
        icon: "fa-database",
        skills: [
            { name: "MySQL", image: "assets/icons/mysql.png", progress: 85 },
            { name: "MongoDB", image: "assets/icons/mongodb.png", progress: 70 },
            { name: "Git", image: "assets/icons/git.png", progress: 80 },
            { name: "Postman", image: "assets/icons/postman.png", progress: 75 },
            { name: "Docker", image: "assets/icons/docker.png", progress: 65 }
        ]
    },
    {
        category: "Mobile Development",
        icon: "fa-mobile-alt",
        skills: [
            { name: "Android Studio", image: "assets/icons/android.png", progress: 70 },
            { name: "React Native", image: "assets/icons/react-native.png", progress: 65 },
            { name: "Firebase", image: "assets/icons/firebase.png", progress: 75 }
        ]
    }
];

// Projects data
const projectsData = [
    {
        title: "Todo List App",
        description: "A simple and interactive web application that enables users to add, edit, and delete tasks, keeping their daily activities organized.",
        image: "assets/projects/todo.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        demoLink: "https://nipunbasnayake.github.io/ToDo/",
        codeLink: "https://github.com/NipunBasnayake/ToDo",
        category: "web"
    },
    {
        title: "Fashion Shop",
        description: "A Java Swing-based desktop application designed to streamline fashion retail operations, inventory management, and sales tracking.",
        image: "assets/projects/fashionshop.jpg",
        tags: ["Java", "Swing", "MySQL"],
        demoLink: "#",
        codeLink: "https://github.com/NipunBasnayake/Fashion-Shop",
        category: "desktop"
    },
    {
        title: "Service Management System",
        description: "A web-based solution developed using PHP to manage service-based businesses, handling bookings and customer records.",
        image: "assets/projects/service.jpg",
        tags: ["PHP", "MySQL", "Bootstrap"],
        demoLink: "#",
        codeLink: "https://github.com/NipunBasnayake/Vehicle-Service-Management-System",
        category: "web"
    },
    {
        title: "Fitness Tracker App",
        description: "A mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations.",
        image: "assets/projects/fitness-app.jpg",
        tags: ["React Native", "Firebase", "Redux"],
        demoLink: "#",
        codeLink: "#",
        category: "mobile"
    },

];

$(document).ready(function () {
    "use strict";

    // ----------------------- Handle Preloader -----------------------
    let progress = 0;
    const interval = setInterval(function() {
        progress += Math.floor(Math.random() * 15);
        if (progress > 100) progress = 100;
        $('#progress-fill').css('width', progress + '%');
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(function() {
                fadeOutPreloader();
            }, 500);
        }
    }, 300);

    $(window).on('load', function() {
        clearInterval(interval);
        $('#progress-fill').css('width', '100%');
        setTimeout(function() {
            fadeOutPreloader();
        }, 500);
    });

    function fadeOutPreloader() {
        $('#preloader').fadeOut(800, function() {
            $('body').css('overflow', 'visible');
            
            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-in-out',
                offset: 100
            });
            
            animateSkills();
        });
    }

    // ----------------------- Initialize Particles.js -----------------------
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
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
                    speed: 2,
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
        });
    }

    // ----------------------- Typed.js for text animation -----------------------
    if (document.getElementById('typewriter-text')) {
        new Typed('#typewriter-text', {
            strings: [
                "Full Stack Developer",
                "UCSC Undergraduate",
                "Java Developer",
                "React Developer",
                "Angular Developer",
                "Spring Boot Developer",
                "Problem Solver"
            ],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
        });
    }

    // ----------------------- Navbar -----------------------
    $(window).on('scroll', function () {
        const scrollPosition = $(window).scrollTop();
        
        const isAtHero = scrollPosition < $('#about').offset().top - 100;
        
        if (scrollPosition > 50) {
            $('#main-navbar').addClass('sticky');
            
            if (!isAtHero) {
                $('#main-navbar').addClass('light-navbar');
            } else {
                $('#main-navbar').removeClass('light-navbar');
            }
        } else {
            $('#main-navbar').removeClass('sticky');
            $('#main-navbar').removeClass('light-navbar');
        }

        if (scrollPosition > 300) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
        
        updateActiveNavItem(scrollPosition);
    });

    function updateActiveNavItem(scrollPosition) {
        $('section').each(function () {
            const sectionTop = $(this).offset().top - 100;
            const sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const id = $(this).attr('id');
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${id}"]`).addClass('active');
            }
        });
    }

    // ----------------------- Smooth scrolling for navigation -----------------------
    $('.nav-link, .scroll-down a, #back-to-top').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // ----------------------- Project filtering -----------------------
    $('.filter-btn').on('click', function () {
        const value = $(this).attr('data-filter');
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if (value === 'all') {
            $('.project-item').show('500');
        } else {
            $('.project-item').not('.' + value).hide('500');
            $('.project-item').filter('.' + value).show('500');
        }
    });

    // ----------------------- Contact form validation -----------------------
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        
        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();
        
        if (name === '' || email === '' || subject === '' || message === '') {
            showAlert('Please fill in all fields', 'danger');
            return false;
        }
        
        showAlert('Your message has been sent successfully!', 'success');
        this.reset();
    });

    function showAlert(message, type) {
        const alertDiv = `
            <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        $('.contact-form').prepend(alertDiv);
        
        setTimeout(function() {
            $('.alert').alert('close');
        }, 5000);
    }

    // ----------------------- Back to top button -----------------------
    $('#back-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // ----------------------- Animate skill progress bars -----------------------
    function animateSkills() {
        $('.skill-progress').each(function() {
            const width = $(this).data('width');
            $(this).animate({
                width: width + '%'
            }, 1500);
        });
    }

    $('#download-cv').on('click', function(e) {
        e.preventDefault();
        alert('CV download functionality will be implemented here');
    });

    $(window).trigger('scroll');
    
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});