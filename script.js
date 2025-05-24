// Animation texte bienvenue
function typeWriter(elementId, text, i = 0) {
  if (i < text.length) {
    document.getElementById(elementId).innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(elementId, text, i + 1), 100);
  }
}

window.addEventListener('load', () => {
  const welcomeText = "Bienvenue sur le site de Jeanne Ngbo, une passionnée d'informatique et de technologie, ici pour partager ses projets, tutoriels et idées. Explorez mon univers numérique et rejoignez-moi dans l'aventure !";
  typeWriter('welcomeMessage', welcomeText, 0);
});

// Gestion menu burger et affichage sections
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('nav ul');
  const links = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      menu.classList.remove('active');

      sections.forEach(section => {
        section.style.display = 'none';
      });

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
