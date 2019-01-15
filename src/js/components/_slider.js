import slick from 'slick-carousel';

var $slider = $('.js-slider');

$slider.slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 784,
      settings: 'unslick'
    }
  ]
});
	
$slider.on('wheel', (function(e) {
  var $that = $(this);
  e.preventDefault();
  if (e.originalEvent.deltaY < 0) {
    $that.slick('slickPrev');
  } else {
    $that.slick('slickNext');
  }
}));
