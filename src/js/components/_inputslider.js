import noUiSlider from 'nouislider';
var toggleSlider = document.querySelector('.input-slider');


noUiSlider.create(toggleSlider, {
  start: 0,
  range: {
    'min': [0, 1],
    'max': 1
  }
});
toggleSlider.noUiSlider.on('change', function() {
  $('.out').toggleClass('1');
});
