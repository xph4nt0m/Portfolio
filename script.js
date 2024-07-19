document.addEventListener("DOMContentLoaded", function() {
    // Afficher le contenu par défaut
    var defaultTab = document.querySelector(".tab-content.default");
    if (defaultTab) {
        defaultTab.style.display = "block";
    }

    // Écouter les clics sur les liens de la barre de navigation
    var navLinks = document.querySelectorAll(".nav li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = link.getAttribute("href").substring(1); // Récupérer l'ID de l'onglet ciblé
            var targetContent = document.getElementById(targetId);

            // Masquer tous les autres contenus d'onglets
            var allTabContents = document.querySelectorAll(".tab-content");
            allTabContents.forEach(function(tab) {
                tab.style.display = "none";
            });

            // Afficher le contenu de l'onglet ciblé
            if (targetContent) {
                targetContent.style.display = "block";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-menu-item a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Empêcher le comportement par défaut du lien
            event.preventDefault();

            // Retirer la classe active de tous les liens
            navLinks.forEach(function(item) {
                item.classList.remove('active');
            });

            // Ajouter la classe active au lien cliqué
            link.classList.add('active');
        });
    });
});


