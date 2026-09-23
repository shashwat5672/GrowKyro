/* ================= MOBILE MENU ================= */

const mobileMenu = document.getElementById("mobileMenu");
const nav = document.querySelector(".nav");

mobileMenu.addEventListener("click", function () {

    nav.classList.toggle("open");

    const icon = mobileMenu.querySelector("i");

    if (nav.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

        const icon = mobileMenu.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= HEADER SCROLL ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= COUNTERS ================= */

const counters =
    document.querySelectorAll("[data-number]");

const counterObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target =
                Number(counter.dataset.number);

            let current = 0;

            const speed = Math.max(
                1,
                Math.floor(target / 60)
            );

            function update() {

                current += speed;

                if (current >= target) {

                    counter.textContent =
                        target + "+";

                    return;

                }

                counter.textContent =
                    current + "+";

                requestAnimationFrame(update);

            }

            update();

            observer.unobserve(counter);

        });

    },

    {
        threshold: .7
    }

);


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ================= CONTACT FORM ================= */

const form =
    document.getElementById("contactForm");

const message =
    document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    message.textContent =
        "Thank you! Your message has been received. We'll get back to you shortly.";

    form.reset();

});


/* ================= AI MOUSE EFFECT ================= */

const aiAnimation =
    document.querySelector(".ai-animation");

const aiCenter =
    document.querySelector(".ai-center");

if (aiAnimation && aiCenter) {

    aiAnimation.addEventListener("mousemove", function (event) {

        const rect =
            aiAnimation.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width - .5;

        const y =
            (event.clientY - rect.top) /
            rect.height - .5;

        aiCenter.style.transform =
            `translate(${x * 15}px, ${y * 15}px)`;

    });


    aiAnimation.addEventListener("mouseleave", function () {

        aiCenter.style.transform = "";

    });

}


/* ================= HERO LOGO EFFECT ================= */

const heroLogo =
    document.querySelector(".hero-logo");

if (heroLogo) {

    heroLogo.addEventListener("mousemove", function (event) {

        const rect =
            heroLogo.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width - .5;

        const y =
            (event.clientY - rect.top) /
            rect.height - .5;

        heroLogo.style.transform =
            `perspective(500px)
             rotateY(${x * 10}deg)
             rotateX(${-y * 10}deg)
             scale(1.04)`;

    });


    heroLogo.addEventListener("mouseleave", function () {

        heroLogo.style.transform = "";

    });

}