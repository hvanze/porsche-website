document.addEventListener("DOMContentLoaded", function() {
    autohideElement = document.querySelector('.autohide');
    navHidden = false
    if (autohideElement) {
        window.addEventListener('scroll', function() {
            if (window.scrollY < 50) {
                if (navHidden) {
                    autohideElement.classList.remove('scrolled-down');
                    autohideElement.classList.add('scrolled-up');
                    navHidden = false;
                }
            } else {
                if (!navHidden) {
                    autohideElement.classList.remove('scrolled-up');
                    autohideElement.classList.add('scrolled-down');
                    navHidden = true;
                }
            }
        }); 
    }
}); 
