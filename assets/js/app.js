const DOMCache = {
    skillAreasContainer: document.getElementById('main-skill-areas'),
    projectContainer: document.getElementById('project-container'),
    certificationsContainer: document.getElementById('certifications-container'),
    navbar: document.getElementById('main-navbar'),
    backToTop: document.getElementById('back-to-top'),
    sections: document.querySelectorAll('section'),
    navLinks: document.querySelectorAll('.nav-link')
};

function populateMainSkillAreas() {
    const fragment = document.createDocumentFragment();
    mainSkillAreas.forEach((area, index) => {
        const div = document.createElement('div');
        div.className = 'col-md-6 mb-5';
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-delay', `${(index + 1) * 100}`);
        div.innerHTML = `
            <div class="skill-area-card">
                <div class="skill-area-header">
                    <div class="skill-area-icon"><i class="fas ${area.icon}"></i></div>
                    <h3>${area.title}</h3>
                </div>
                <p class="skill-area-description">${area.description}</p>
                <div class="skill-area-tags">
                    ${area.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
            </div>
        `;
        fragment.appendChild(div);
    });
    DOMCache.skillAreasContainer.innerHTML = '';
    DOMCache.skillAreasContainer.appendChild(fragment);
}

function populateProjects() {
    const fragment = document.createDocumentFragment();
    projectsData.forEach((project, index) => {
        const delay = (index % 3 + 1) * 100;
        const viewLinkHTML = project.viewButton 
            ? `<a href="${project.demoLink}" target="_blank" class="project-link"><i class="fas fa-eye"></i></a>` 
            : '';
        
        const div = document.createElement('div');
        div.className = `col-md-6 col-lg-4 mb-4 project-item ${project.category} ${project.featured ? 'featured' : ''}`;
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-delay', `${delay}`);
        div.innerHTML = `
            <div class="project-card">
                <div class="project-img">
                    <img src="${project.image}" 
                         srcset="${project.image} 320w, ${project.image.replace('.webp', '-medium.webp')} 768w, ${project.image.replace('.webp', '-large.webp')} 1200w"
                         sizes="(max-width: 768px) 100vw, 33vw"
                         alt="${project.title}" 
                         class="img-fluid"
                         loading="lazy"
                         onerror="this.src='assets/images/projects/placeholder.webp'">
                    <div class="project-overlay">
                        <div class="project-links">${viewLinkHTML}
                            <a href="${project.codeLink}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <div class="project-tags">${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
                    <h4 class="project-title">${project.title}</h4>
                    <p class="project-description">${project.description}</p>
                </div>
            </div>
        `;
        fragment.appendChild(div);
    });
    DOMCache.projectContainer.innerHTML = '';
    DOMCache.projectContainer.appendChild(fragment);
}

function populatePersonalInfo() {
    try {
        const heroContent = document.querySelector('.hero-content h1');
        heroContent.innerHTML = `Hi, I'm <span class="highlight">${personalData.firstName}</span>`;

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
                    if (!document.getElementById('typewriter-styles')) {
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
                            @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                        `;
                        document.head.appendChild(styleEl);
                    }
                }
            });
        }

        const aboutContent = document.querySelector('.about-content');
        aboutContent.querySelector('h3').textContent = sectionsData.about.subtitle;
        aboutContent.querySelector('.lead').innerHTML = `
            Hi, I'm <strong>${personalData.fullName}</strong>, a passionate ${personalData.age}-year-old Software
            Engineering student from ${personalData.location}.
        `;
        aboutContent.querySelector('p:not(.lead)').textContent = personalData.bio;

        document.querySelectorAll('.info-item').forEach(item => {
            const title = item.querySelector('.info-title').textContent.trim().slice(0, -1).toLowerCase();
            const value = item.querySelector('.info-value');
            switch (title) {
                case 'name': value.textContent = personalData.fullName; break;
                case 'age': value.textContent = personalData.age; break;
                case 'location': value.textContent = personalData.location; break;
                case 'education': value.textContent = personalData.education; break;
            }
        });

        document.querySelector('.experience-badge .number').textContent = personalData.experience;
        
        const emailLink = document.querySelector('a[href^="mailto:"]');
        emailLink.textContent = personalData.email;
        emailLink.href = `mailto:${personalData.email}`;
        
        const phoneLink = document.querySelector('a[href^="tel:"]');
        phoneLink.textContent = personalData.phone;
        phoneLink.href = `tel:${personalData.phone}`;

        document.querySelectorAll('.social-links a').forEach(link => {
            const icon = link.querySelector('i');
            const classList = icon.classList;
            if (classList.contains('fa-github')) link.href = personalData.socialLinks.github;
            else if (classList.contains('fa-linkedin-in')) link.href = personalData.socialLinks.linkedin;
            else if (classList.contains('fa-facebook-f')) link.href = personalData.socialLinks.facebook;
            else if (classList.contains('fa-instagram')) link.href = personalData.socialLinks.instagram;
            else if (classList.contains('fa-whatsapp')) link.href = personalData.socialLinks.whatsapp;
        });

        Object.keys(sectionsData).forEach(section => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const titleElement = sectionElement.querySelector('.section-title h2');
                const descriptionElement = sectionElement.querySelector('.section-description');
                if (titleElement && sectionsData[section].title) titleElement.textContent = sectionsData[section].title;
                if (descriptionElement && sectionsData[section].subtitle) descriptionElement.textContent = sectionsData[section].subtitle;
            }
        });

        document.querySelector('.footer .mb-0').textContent = `© ${new Date().getFullYear()} ${personalData.fullName}. All rights reserved.`;
    } catch (error) {
        console.error('Error in populatePersonalInfo:', error);
    }
}

function populateCertifications() {
    const fragment = document.createDocumentFragment();
    certificationsData.forEach((cert, index) => {
        const div = document.createElement('div');
        div.className = 'col-md-6 mb-4';
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-delay', `${(index + 1) * 100}`);
        div.innerHTML = `
            <div class="certification-card">
                <div class="certification-badge">
                    <img src="${cert.badge}" alt="${cert.title} Badge" class="img-fluid" loading="lazy" onerror="this.src='assets/images/certifications/placeholder.webp'">
                </div>
                <div class="certification-details">
                    <h3>${cert.title}</h3>
                    <div class="certification-meta">
                        <span class="issuer"><i class="fas fa-award"></i> ${cert.issuer}</span>
                        <span class="date"><i class="far fa-calendar-alt"></i> ${cert.date}</span>
                    </div>
                    <p class="certification-description">${cert.description}</p>
                    <a class="btn btn-primary" href="${cert.verificationLink}" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Verify Credential
                    </a>
                </div>
            </div>
        `;
        fragment.appendChild(div);
    });
    DOMCache.certificationsContainer.innerHTML = '';
    DOMCache.certificationsContainer.appendChild(fragment);
}

function initParticles() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', particlesConfig);
    }
}

function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 70;
    const startPosition = window.scrollY;
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
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }

    setViewportHeight();
    window.addEventListener('resize', debounce(setViewportHeight, 100));
    window.addEventListener('orientationchange', setViewportHeight);

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.addEventListener('touchstart', () => {
            window.scrollY = window.scrollY;
        }, { passive: false });
    }
}

function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
            } else {
                entry.target.classList.remove('scrolled');
            }
        });
    }, {
        rootMargin: '0px 0px -20% 0px',
        threshold: 0.1
    });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        populatePersonalInfo();
        populateMainSkillAreas();
        populateProjects();
        populateCertifications();
        initParticles();
        fixMobileScrolling();

        const progressFill = document.getElementById('progress-fill');
        const preloader = document.getElementById('preloader');
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15);
            if (progress > 100) progress = 100;
            progressFill.style.width = `${progress}%`;

            if (progress === 100) {
                clearInterval(interval);
                setTimeout(fadeOutPreloader, 500);
            }
        }, 300);

        window.addEventListener('load', () => {
            clearInterval(interval);
            progressFill.style.width = '100%';
            setTimeout(fadeOutPreloader, 500);
        });

        function fadeOutPreloader() {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            document.body.style.overflow = 'visible';

            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-in-out',
                offset: 100,
                disable: window.innerWidth < 768
            });

            document.querySelectorAll('.skill-progress').forEach(progress => {
                progress.style.transition = 'width 1.5s ease-in-out';
                progress.style.width = progress.getAttribute('data-width') + '%';
            });
        }

        const scrollHandler = debounce(() => {
            const scrollPosition = window.scrollY;
            const aboutSection = document.getElementById('about');
            const isAtHero = scrollPosition < aboutSection.offsetTop - 100;

            DOMCache.navbar.classList.toggle('sticky', scrollPosition > 50);
            DOMCache.navbar.classList.toggle('light-navbar', scrollPosition > 50 && !isAtHero);
            DOMCache.backToTop.classList.toggle('show', scrollPosition > 300);

            let activeSectionId = 'home';
            DOMCache.sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
                    activeSectionId = section.getAttribute('id');
                }
            });

            DOMCache.navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${activeSectionId}`);
            });
        }, 100);

        window.addEventListener('scroll', scrollHandler);

        document.querySelectorAll('.nav-link, .scroll-down a, #back-to-top').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    smoothScroll(link.getAttribute('href'), 800);
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    if (navbarToggler && document.querySelector('.navbar-collapse').classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            });
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const value = btn.getAttribute('data-filter');
                document.querySelectorAll('.filter-btn').forEach(button => button.classList.remove('active'));
                btn.classList.add('active');
                
                document.querySelectorAll('.project-item').forEach(item => {
                    item.style.display = (value === 'all' || item.classList.contains(value)) ? 'block' : 'none';
                });
            });
        });

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                if (!navigator.onLine) {
                    showAlert('No internet connection. Please try again later.', 'danger');
                    return;
                }

                const formElements = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };

                if (!formElements.name || !formElements.email || !formElements.subject || !formElements.message) {
                    showAlert('Please fill in all fields', 'danger');
                    return;
                }

                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.innerHTML;
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';

                try {
                    const formData = new FormData();
                    Object.entries(formElements).forEach(([key, value]) => formData.append(key, value));
                    formData.append('_captcha', 'false');
                    formData.append('_subject', `New message from ${formElements.name}: ${formElements.subject}`);

                    const response = await fetch('https://formsubmit.co/nipunsathsara1999@gmail.com', {
                        method: 'POST',
                        body: formData,
                        signal: AbortSignal.timeout(10000)
                    });

                    if (response.ok) {
                        showAlert('Your message has been sent successfully!', 'success');
                        contactForm.reset();
                    } else {
                        throw new Error('Server error');
                    }
                } catch (error) {
                    console.error('Form submission error:', error);
                    showAlert('Failed to send message. Please try again later.', 'danger');
                } finally {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                }
            });
        }

        function showAlert(message, type) {
            const existingAlerts = document.querySelectorAll('.alert');
            existingAlerts.forEach(alert => alert.remove());

            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
            alertDiv.innerHTML = `
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
            document.querySelector('.contact-form-wrapper').insertBefore(alertDiv, contactForm);

            if (type !== 'danger') {
                setTimeout(() => {
                    alertDiv.classList.remove('show');
                    setTimeout(() => alertDiv.remove(), 300);
                }, 5000);
            }
        }

        document.getElementById('download-cv').addEventListener('click', (e) => {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = 'assets/cv/Nipun_Sathsara_Resume.pdf';
            link.download = 'Nipun_Sathsara_Resume.pdf';
            link.click();
        });

        initSmoothScrollForAllLinks();
        initScrollAnimation();
        window.dispatchEvent(new Event('scroll'));
    } catch (error) {
        console.error('Initialization error:', error);
    }
});