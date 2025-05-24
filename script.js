// Animation message de bienvenue
function typeWriter(elementId, text, i = 0) {
    if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(elementId, text, i + 1), 50);
    }
}

window.addEventListener('load', () => {
    const welcomeText = "Bienvenue sur le site de Jeanne Ngbo, une passionnée d'informatique et de technologie, ici pour partager ses projets, tutoriels et idées. Explorez mon univers numérique et rejoignez-moi dans l'aventure !";
    typeWriter('welcomeMessage', welcomeText);
});

// Navigation menu mobile toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Récupère le menu burger et la liste
const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// Ouvre/ferme le menu burger au clic sur l'icône
burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Au clic sur un lien du menu
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Empêche le scroll automatique

    // Ferme le menu burger si ouvert (utile sur mobile)
    menu.classList.remove('active');

    // Récupère l'id de la section ciblée via href (ex: #apropos)
    const targetId = link.getAttribute('href').substring(1);

    // Cache toutes les sections
    sections.forEach(section => section.style.display = 'none');

    // Affiche la section ciblée
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  });
});

// Optionnel : Afficher par défaut la section 'apropos'
window.addEventListener('load', () => {
  sections.forEach(section => section.style.display = 'none');
  const defaultSection = document.getElementById('apropos');
  if (defaultSection) defaultSection.style.display = 'block';
});
});

// Afficher une seule section à la fois
navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        // Fermer menu mobile s'il est ouvert
        if(navLinks.classList.contains('active')){
            navLinks.classList.remove('active');
        }

        // Gérer les liens actifs
        navLinkItems.forEach(lnk => lnk.classList.remove('active'));
        link.classList.add('active');

        // Afficher la section correspondante, cacher les autres
        const targetId = link.getAttribute('href').substring(1);
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});
