// Animation texte bienvenue
function typeWriter(elementId, text, i = 0) {
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Cacher toutes les sections au départ
  sections.forEach(section => section.style.display = 'none');

  // Afficher la section "A propos" par défaut
  const defaultSection = document.getElementById('apropos');
  if (defaultSection) defaultSection.style.display = 'block';

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      menu.classList.remove('active');

      sections.forEach(section => section.style.display = 'none');

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
