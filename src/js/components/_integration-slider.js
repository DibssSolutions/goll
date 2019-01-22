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
  nextArrow: ('<button type="button" class="slick-next"><span></span></button>'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

sliderSmall.slick(slickOptions);

var sliderParent = $('.js-slider-parent');

sliderParent.each(function() {
  var unslickChild = $(this).find('.js-unslick');
  var sliderChild = $(this).find('.js-slider-small');
  unslickChild.on('click', function() {
    var dataHide = $('[data-btn-hide]');
    var dataHideID = dataHide.data('btn-hide');
    var dataShow = $('[data-btn-show]');
    var dataShowID = dataShow.data('btn-show');
    if (!sliderChild.hasClass(ACTIVE)) {
      sliderChild.slick('unslick');
      sliderChild.addClass(ACTIVE);
      unslickChild.text(dataHideID);
    } else {
      sliderChild.slick(slickOptions);
      sliderChild.removeClass(ACTIVE);
      unslickChild.text(dataShowID);
    }
  });
});

