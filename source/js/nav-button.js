let navButton = document.querySelector('.nav-toggle');
let mainNav = document.querySelector('.main-nav');
let buttonText = document.querySelector('.main-nav__close-toggle--visually-hidden');

mainNav.classList.remove('main-nav--no-js');
navButton.onclick = function () {
  mainNav.classList.toggle('main-nav--shown');
  navButton.classList.toggle('nav-toggle--close');
};
