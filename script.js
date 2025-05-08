   // Fonction pour l'animation du message de bienvenue
   function typeWriter(elementId, text, i = 0) {
    if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i); // Ajoute chaque caractère au texte
        setTimeout(function () {
            typeWriter(elementId, text, i + 1); // Continue à ajouter les caractères
        }, 100); // Delai de 100ms entre chaque caractère
    }
}

// Fonction d'initialisation qui démarre l'animation dès que la page est prête
window.addEventListener("load", function () {
    const welcomeText = "Bienvenue sur le site de Jeanne Ngbo, une passionnée d'informatique et de technologie, ici pour partager ses projets, tutoriels et idées. Explorez mon univers numérique et rejoignez-moi dans l'aventure !";
    
    // Lancer l'animation du texte de bienvenue dans l'élément avec l'ID 'welcomeMessage'
    typeWriter("welcomeMessage", welcomeText, 0);
});
