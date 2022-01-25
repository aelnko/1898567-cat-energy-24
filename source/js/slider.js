let sliderBeforeButton = document.querySelector('.slider-text__before');
let sliderAfterButton = document.querySelector('.slider-text__after');
let sliderBefore = document.querySelector('.slider__before');
let sliderAfter = document.querySelector('.slider__after');

sliderBeforeButton.onclick = function() {
  sliderBefore.classList.add('slider__before--shown');
  sliderAfter.classList.add('slider__after--hidden');
  sliderAfter.classList.remove('slider__after--shown');
};

sliderAfterButton.onclick = function() {
  sliderAfter.classList.add('slider__after--shown');
  sliderBefore.classList.add('slider__before--hidden');
  sliderBefore.classList.remove('slider__before--shown');
}
