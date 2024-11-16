document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

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


