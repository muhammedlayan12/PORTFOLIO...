var typed = new Typed(".typing", {
    strings: ["Front-end Developer", "UI / UX Designer", "SEO Expert" , "Wordpress Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.aside .nav li a');
    const sections = document.querySelectorAll('section');
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');

    // Function to set active link based on the scroll position
    function setActiveLink(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }

    // Intersection Observer setup
    const observer = new IntersectionObserver(setActiveLink, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Adjust this value as needed
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Navigation link click event
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Toggler click event
    navToggler.addEventListener('click', () => {
        aside.classList.toggle('active');
    });

    // Handle screen resizing
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            aside.classList.remove('active'); // Reset aside state on large screens
        }
    });
});



// Scroll to contact section when hire me button is clicked
let button = document.getElementsByClassName("hire-me")[0];
let contactSec = document.getElementById("contact");
button.addEventListener("click",()=>{
    window.scrollTo({
        top:contactSec.offsetTop,
        behavior: "smooth"
    });
});













// Scroll to home section when home  button is clicked
let home = document.getElementsByClassName("active")[0];
let homeSec = document.getElementById("home");

home.addEventListener("click", () => {
    homeSec.scrollIntoView({
        behavior: "smooth"
    });
});
