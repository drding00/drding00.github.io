const mobileNav = document.querySelector('#mobile-nav');
const mobileButton = document.querySelector('.mobile-button');

mobileButton.addEventListener('click', () => {
  mobileButton.classList.toggle('toggle-button');
  mobileNav.classList.toggle('active');
});
