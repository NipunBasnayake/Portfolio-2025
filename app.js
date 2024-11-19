// --------------------------- Smooth Navigation  ---------------------------

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});


// --------------------------- Hover Effect ---------------------------

document.querySelectorAll(".hover-effect").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#F5F5F5";
        link.style.transform = "scale(1.1)"; 
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "#C8AD7D"; 
        link.style.transform = "scale(1)"; 
    });
});


// --------------------------- Smooth Scroll ---------------------------

const sections = document.querySelectorAll("section");
let isScrolling = false;

window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    const currentSectionIndex = [...sections].findIndex(section => 
        window.scrollY >= section.offsetTop && 
        window.scrollY < section.offsetTop + section.offsetHeight
    );

    if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        isScrolling = true;
        sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
    } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        isScrolling = true;
        sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth" });
    }

    const scrollDuration = 500;
    setTimeout(() => {
        isScrolling = false;
    }, scrollDuration);
});


// --------------------------- GitHub Links ---------------------------

document.getElementById('github-btn-1').addEventListener('click', function () {
    window.open('https://nipunbasnayake.github.io/ToDo/', '_blank');
});

document.getElementById('github-btn-2').addEventListener('click', function () {
    window.open('https://github.com/NipunBasnayake/Fashion-Shop', '_blank');
});

document.getElementById('github-btn-3').addEventListener('click', function () {
    window.open('https://github.com/NipunBasnayake/Vehicle-Service-Management-System', '_blank');
});


// --------------------------- Text Slide Show ---------------------------

const slides = document.querySelectorAll('.slide-text');
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'inline-block';
}, 3000);
