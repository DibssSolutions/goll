import slick from 'slick-carousel';
import {ACTIVE} from '../constants.js';

var sliderSmall = $('.js-slider-small');
var unslick = $('.js-unslick');

var slickOptions = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: ('<button type="button" class="slick-prev"><span></span></button>'),
  nextArrow: ('<button type="button" class="slick-next"><span></span></button>')
};

sliderSmall.slick(slickOptions);



unslick.on('click', function() {
  var this_ = $(this);
  var dataHide = $('[data-btn-hide]');
  var dataHideID = dataHide.data('btn-hide');
  var dataShow = $('[data-btn-show]');
  var dataShowID = dataShow.data('btn-show');
  if (!sliderSmall.hasClass(ACTIVE)) {
    sliderSmall.slick('unslick');
    sliderSmall.addClass(ACTIVE);
    this_.text(dataHideID);
  } else {
    sliderSmall.slick(slickOptions);
    sliderSmall.removeClass(ACTIVE);
    this_.text(dataShowID);
  }
});
