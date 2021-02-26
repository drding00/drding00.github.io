
const MobileButton = document.getElementById('mobile-nav-button');
const MobileMenu = document.getElementById('mobile-nav');

MobileButton.addEventListener('click', () => {
    MobileMenu.classList.toggle('mobile-nav-show');
    MobileButton.classList.toggle('mobile-nav-button-close');
});