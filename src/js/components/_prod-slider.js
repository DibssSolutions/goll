import slick from 'slick-carousel';

var sliderProd = $('.js-slider-prod');

var slickOptions = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  prevArrow: ('<button type="button" class="slick-prev"><span></span></button>'),
  nextArrow: ('<button type="button" class="slick-next"><span></span></button>'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 3,
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

sliderProd.slick(slickOptions);
