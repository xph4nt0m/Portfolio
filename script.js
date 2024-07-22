document.addEventListener("DOMContentLoaded", function() {
    var defaultTab = document.querySelector(".tab-content.default");
    if (defaultTab) {
        defaultTab.style.display = "flex";
    }

    var navLinks = document.querySelectorAll(".nav li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = link.getAttribute("href").substring(1);
            var targetContent = document.getElementById(targetId);

            var allTabContents = document.querySelectorAll(".tab-content");
            allTabContents.forEach(function(tab) {
                tab.style.display = "none";
            });

            if (targetContent) {
                targetContent.style.display = "flex";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-menu-item a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            navLinks.forEach(function(item) {
                item.classList.remove('active');
            });

            link.classList.add('active');
        });
    });
});


