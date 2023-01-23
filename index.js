const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener('click', function() {
    navLinks.classList.toggle('active')
})