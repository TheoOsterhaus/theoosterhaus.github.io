/* ===== Smooth Scroll for internal links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ===== Active Navigation Highlight ===== */
const links = document.querySelectorAll("nav a");
const currentPath = window.location.pathname;

links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.style.fontWeight = "700";
    }
});

/* ===== Simple Fade-in on Load ===== */
window.addEventListener("load", () => {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.6s ease";
    
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});