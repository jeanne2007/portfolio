
// Animation message bienvenue
function typeWriter(elementId, text, i = 0) {
  if (i < text.length) {
    document.getElementById(elementId).innerHTML += text.charAt(i);
    setTimeout(function () {
      typeWriter(elementId, text, i + 1);
    }, 50);
  }
}

window.addEventListener("load", function () {
  const welcomeText =
    "Bienvenue sur le site de Jeanne Ngbo, une passionnée d'informatique et de technologie, ici pour partager ses projets, tutoriels et idées. Explorez mon univers numérique et rejoignez-moi dans l'aventure !";

  typeWriter("welcomeMessage", welcomeText, 0);
});

// Navigation - Afficher une seule section à la fois
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Enlever active de tous les liens
    navLinks.forEach((lnk) => lnk.classList.remove("active"));

    // Ajouter active au lien cliqué
    link.classList.add("active");

    // Masquer toutes les sections
    sections.forEach((sec) => sec.classList.remove("active-section"));

    // Afficher la section correspondante
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active-section");
    }

    // Si menu burger ouvert, fermer
    if (navLinksContainer.classList.contains("open")) {
      navLinksContainer.classList.remove("open");
    }
  });
});

// Burger menu toggle
const burger = document.querySelector(".burger");
const navLinksContainer = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("open");
});
