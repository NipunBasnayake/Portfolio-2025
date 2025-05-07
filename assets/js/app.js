function populateMainSkillAreas() {
    const skillAreasContainer = document.getElementById('main-skill-areas');
    skillAreasContainer.innerHTML = '';
    mainSkillAreas.forEach((area, index) => {
        const delay = (index + 1) * 100;
        const skillAreaHTML = `
            <div class="col-md-6 mb-5" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="skill-area-card">
                    <div class="skill-area-header">
                        <div class="skill-area-icon">
                            <i class="fas ${area.icon}"></i>
                        </div>
                        <h3>${area.title}</h3>
                    </div>
                    <p class="skill-area-description">${area.description}</p>
                    <div class="skill-area-tags">
                        ${area.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        skillAreasContainer.innerHTML += skillAreaHTML;
    });
}

function populateProjects() {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '';
    projectsData.forEach((project, index) => {
        const delay = (index % 3 + 1) * 100;
        const viewLinkHTML = project.viewButton
            ? `<a href="${project.demoLink}" target="_blank" class="project-link">
                    <i class="fas fa-eye"></i>
               </a>`
            : '';

        const projectHTML = `
            <div class="col-md-6 col-lg-4 mb-4 project-item ${project.category}" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="project-card">
                    <div class="project-img">
                        <img src="${project.image.replace('assets/projects/', '/api/placeholder/400/250')}" 
                             alt="${project.title}" 
                             class="img-fluid"
                             onerror="this.onerror=null; this.src='${project.defaultImage}'">
                        <div class="project-overlay">
                            <div class="project-links">
                                ${viewLinkHTML}
                                <a href="${project.codeLink}" target="_blank" class="project-link">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                        <h4 class="project-title">${project.title}</h4>
                        <p class="project-description">
                            ${project.description}
                        </p>
                    </div>
                </div>
            </div>
        `;
        projectContainer.innerHTML += projectHTML;
    });
}


function populatePersonalInfo() {
    document.querySelector('.hero-content h1').innerHTML = `Hi, I'm <span class="highlight">${personalData.firstName}</span>`;

    if (document.getElementById('typewriter-text')) {
        new Typed('#typewriter-text', {
            strings: personalData.roles,
            typeSpeed: 70,
            backSpeed: 35,
            backDelay: 1600,
            startDelay: 400,
            loop: true,
            showCursor: true,
            smartBackspace: true,
            onBegin: () => {
                const cursor = document.querySelector('.typed-cursor');
                if (cursor && !document.getElementById('typewriter-styles')) {
                    const styleEl = document.createElement('style');
                    styleEl.id = 'typewriter-styles';
                    styleEl.textContent = `
                        .typed-cursor {
                            display: inline-block;
                            margin-left: 2px;
                            width: 2px;
                            background-color: var(--accent);
                            animation: blink 1s infinite;
                            height: 1.6rem;
                            vertical-align: bottom;
                        }
                        @keyframes blink {
                            0%, 100% { opacity: 1; }
                            50% { opacity: 0; }
                        }
                    `;
                    document.head.appendChild(styleEl);
                }
            }
        });
    } 

    document.querySelector('.about-content h3').textContent = sectionsData.about.subtitle;
    document.querySelector('.about-content .lead').innerHTML = `
        Hi, I'm <strong>${personalData.fullName}</strong>, a passionate ${personalData.age}-year-old Software
        Engineering student from ${personalData.location}.
    `;
    document.querySelector('.about-content p:not(.lead)').textContent = personalData.bio;

    document.querySelectorAll('.info-item').forEach(item => {
        const title = item.querySelector('.info-title').textContent.trim().slice(0, -1).toLowerCase();

        if (title === 'name') {
            item.querySelector('.info-value').textContent = personalData.fullName;
        } else if (title === 'age') {
            item.querySelector('.info-value').textContent = personalData.age;
        } else if (title === 'location') {
            item.querySelector('.info-value').textContent = personalData.location;
        } else if (title === 'education') {
            item.querySelector('.info-value').textContent = personalData.education;
        }
    });

    document.querySelector('.experience-badge .number').textContent = personalData.experience;

    document.querySelector('a[href^="mailto:"]').textContent = personalData.email;
    document.querySelector('a[href^="mailto:"]').href = `mailto:${personalData.email}`;
    document.querySelector('a[href^="tel:"]').textContent = personalData.phone;
    document.querySelector('a[href^="tel:"]').href = `tel:${personalData.phone}`;

    const socialLinkElements = document.querySelectorAll('.social-links a');
    socialLinkElements.forEach(link => {
        const icon = link.querySelector('i');
        if (icon.classList.contains('fa-github')) {
            link.href = personalData.socialLinks.github;
        } else if (icon.classList.contains('fa-linkedin-in')) {
            link.href = personalData.socialLinks.linkedin;
        } else if (icon.classList.contains('fa-facebook-f')) {
            link.href = personalData.socialLinks.facebook;
        } else if (icon.classList.contains('fa-instagram')) {
            link.href = personalData.socialLinks.instagram;
        } else if (icon.classList.contains('fa-whatsapp')) {
            link.href = personalData.socialLinks.whatsapp;
        }
    });

    Object.keys(sectionsData).forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            const titleElement = sectionElement.querySelector('.section-title h2');
            const descriptionElement = sectionElement.querySelector('.section-description');

            if (titleElement && sectionsData[section].title) {
                titleElement.textContent = sectionsData[section].title;
            }

            if (descriptionElement && sectionsData[section].subtitle) {
                descriptionElement.textContent = sectionsData[section].subtitle;
            }
        }
    });

    document.querySelector('.footer .mb-0').textContent = `© ${new Date().getFullYear()} ${personalData.fullName}. All rights reserved.`;
}

function initParticles() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', particlesConfig);
    }
}

function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

function fixMobileScrolling() {
    function setViewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.addEventListener('touchstart', function (e) {
            window.scrollY = window.scrollY;
        }, { passive: false });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    populatePersonalInfo();
    populateMainSkillAreas();
    populateProjects();
    populateCertifications();
    initParticles();
    fixMobileScrolling();

    let progress = 0;
    const interval = setInterval(function () {
        progress += Math.floor(Math.random() * 15);
        if (progress > 100) progress = 100;
        document.getElementById('progress-fill').style.width = progress + '%';

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(function () {
                fadeOutPreloader();
            }, 500);
        }
    }, 300);

    window.addEventListener('load', function () {
        clearInterval(interval);
        document.getElementById('progress-fill').style.width = '100%';
        setTimeout(function () {
            fadeOutPreloader();
        }, 500);
    });

    function fadeOutPreloader() {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        document.body.style.overflow = 'visible';

        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            offset: 100
        });

        animateSkills();
    }

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const navbar = document.getElementById('main-navbar');
        const aboutSection = document.getElementById('about');
        const backToTop = document.getElementById('back-to-top');

        const isAtHero = scrollPosition < aboutSection.offsetTop - 100;

        if (scrollPosition > 50) {
            navbar.classList.add('sticky');

            if (!isAtHero) {
                navbar.classList.add('light-navbar');
            } else {
                navbar.classList.remove('light-navbar');
            }
        } else {
            navbar.classList.remove('sticky');
            navbar.classList.remove('light-navbar');
        }

        if (scrollPosition > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }

        updateActiveNavItem(scrollPosition);
    });

    function updateActiveNavItem(scrollPosition) {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const id = section.getAttribute('id');

                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                });

                document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
            }
        });
    }

    document.querySelectorAll('.nav-link, .scroll-down a, #back-to-top').forEach(function (link) {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const hash = this.getAttribute('href');
                smoothScroll(hash, 800);
            }
        });
    });

    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const value = this.getAttribute('data-filter');
            const projectItems = document.querySelectorAll('.project-item');

            document.querySelectorAll('.filter-btn').forEach(function (button) {
                button.classList.remove('active');
            });

            this.classList.add('active');

            projectItems.forEach(function (item) {
                if (value === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(value)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                showAlert('Please fill in all fields', 'danger');
                return false;
            }

            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
            formData.append('_captcha', 'false');
            formData.append('_subject', `New message from ${name}: ${subject}`);

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';

            fetch('https://formsubmit.co/nipunsathsara1999@gmail.com', {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        showAlert('Your message has been sent successfully!', 'success');
                        contactForm.reset();
                    } else {
                        throw new Error('Server responded with an error');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showAlert('There was an error sending your message. Please try again later.', 'danger');
                })
                .finally(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                });
        });

        function showAlert(message, type) {
            const existingAlerts = document.querySelectorAll('.alert');
            existingAlerts.forEach(alert => alert.remove());

            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
            alertDiv.role = 'alert';
            alertDiv.innerHTML = `
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;

            const formWrapper = document.querySelector('.contact-form-wrapper');
            formWrapper.insertBefore(alertDiv, contactForm);

            if (type !== 'danger') {
                setTimeout(function () {
                    alertDiv.classList.remove('show');
                    setTimeout(() => alertDiv.remove(), 300);
                }, 5000);
            }
        }
    }

    function animateSkills() {
        document.querySelectorAll('.skill-progress').forEach(function (progress) {
            const width = progress.getAttribute('data-width');
            progress.style.transition = 'width 1.5s ease-in-out';
            progress.style.width = width + '%';
        });
    }

    document.getElementById('download-cv').addEventListener('click', function (e) {
        e.preventDefault();
        const cvPath = 'assets/cv/Nipun Sathsara Resume.pdf';

        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'Nipun_Sathsara_Resume.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    window.dispatchEvent(new Event('scroll'));
    initSmoothScrollForAllLinks();
});

function initSmoothScrollForAllLinks() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId, 800);
        });
    });

    document.querySelectorAll('.smooth-scroll-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-target');
            if (targetSection) {
                smoothScroll(targetSection, 800);
            }
        });
    });

    initScrollAnimation();
}

function initScrollAnimation() {
    const scrollElements = document.querySelectorAll('.scroll-animate');

    function elementInView(el) {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= window.innerHeight * 0.8;
    }

    function displayScrollElement(element) {
        element.classList.add('scrolled');
    }

    function hideScrollElement(element) {
        element.classList.remove('scrolled');
    }

    function handleScrollAnimation() {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();
}

function populateCertifications() {
    const certificationsContainer = document.getElementById('certifications-container');
    certificationsContainer.innerHTML = '';
    
    certificationsData.forEach((cert, index) => {
        const delay = (index + 1) * 100;
        const certHTML = `
            <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="certification-card">
                    <div class="certification-badge">
                        <img src="${cert.badge}" alt="${cert.title} Badge" class="img-fluid">
                    </div>
                    <div class="certification-details">
                        <h3>${cert.title}</h3>
                        <div class="certification-meta">
                            <span class="issuer"><i class="fas fa-award"></i> ${cert.issuer}</span>
                            <span class="date"><i class="far fa-calendar-alt"></i> ${cert.date}</span>
                        </div>
                        <p class="certification-description">${cert.description}</p>
                        <a class="btn btn-primary"  href="${cert.verificationLink}" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Verify Credential
                        </a>
                    </div>
                </div>
            </div>
        `;
        certificationsContainer.innerHTML += certHTML;
    });
}