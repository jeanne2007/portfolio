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
