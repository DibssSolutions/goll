import slick from 'slick-carousel';

var $slider = $('.js-slider');

$slider.slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true
});
	
$slider.on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));
