let navButton = document.querySelector('.main-nav__toggle');
let mainNav = document.querySelector('.main-nav');
let buttonText = document.querySelector('.main-nav__close-toggle--visually-hidden');

mainNav.classList.remove('main-nav--no-js');
navButton.onclick = function () {
  mainNav.classList.toggle('main-nav--shown');
  navButton.classList.toggle('main-nav__toggle--close');
  if (navButton.classList.contains('main-nav__toggle--close')) {
    buttonText.textContent = "Закрыть меню";
  } else {
    buttonText.textContent = "Открыть меню";
  }
};

