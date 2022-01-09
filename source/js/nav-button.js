let navButton = document.querySelector('.main-nav__toggle');
let mainNav = document.querySelector('.main-nav');

navButton.onclick = function () {
  mainNav.classList.add('main-nav--shown');
};
