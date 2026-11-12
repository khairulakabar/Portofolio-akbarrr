
// =====================================
// PORTFOLIO KHAIRUL AKBAR
// JAVASCRIPT
// =====================================


// 1. LOADING SCREEN

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 700);
});


// 2. MENU NAVIGASI HP

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuToggle.innerHTML =
        navMenu.classList.contains("active") ? "&times;" : "&#9776;";
});

// Tutup menu setelah link diklik

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.innerHTML = "&#9776;";
    });
});


// 3. EFEK MENGETIK OTOMATIS

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Pelajar RPL",
    "Programmer",
    "Creative Designer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 55 : 100;

    if (!deleting && charIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 4. ANIMASI SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


// 5. ANIMASI SKILL BAR

const skillSection = document.querySelector(".skills");

const skillObserver = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {

                const progressBars =
                    document.querySelectorAll(".skill-progress");

                progressBars.forEach(function (bar) {
                    bar.style.width = bar.dataset.width;
                });

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3
    }
);

if (skillSection) {
    skillObserver.observe(skillSection);
}


// 6. TOMBOL KEMBALI KE ATAS

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 7. NAVBAR AKTIF SESUAI SECTION

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });

});


// 8. FORM KONTAK WHATSAPP

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const subjek = document.getElementById("subjek").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !subjek || !pesan) {
        alert("Silakan lengkapi semua kolom!");
        return;
    }

    const nomorWA = "6283175122369";

    const isiPesan =
        "Halo Akbar!\n\n" +
        "Nama: " + nama + "\n" +
        "Subjek: " + subjek + "\n" +
        "Pesan: " + pesan;

    const linkWA =
        "https://wa.me/" +
        nomorWA +
        "?text=" +
        encodeURIComponent(isiPesan);

    window.open(linkWA, "_blank");

});


// 9. EFEK NAVBAR SAAT SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// 10. TAHUN OTOMATIS DI FOOTER

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        "© " + new Date().getFullYear() +
        " Khairul Akbar. All Rights Reserved.";
}

console.log("Portfolio Khairul Akbar berhasil dijalankan!");
