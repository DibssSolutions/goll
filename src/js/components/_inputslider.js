import noUiSlider from 'nouislider';
import {OPEN, OVERFLOW_HIDDEN, BODY} from '../constants';

var toggleSlider = $('.js-input-slider');

if (toggleSlider.length) {
  
  noUiSlider.create(toggleSlider[0], {
    start: 0,
    range: {
      'min': [0, 1],
      'max': 1
    }
  });

  var popupVideo = $('.js-popup-video');
  function openPopup() {
    popupVideo.toggleClass(OPEN);
    BODY.toggleClass(OVERFLOW_HIDDEN);
  }

  toggleSlider[0].noUiSlider.on('slide', function() {
    setTimeout(openPopup, 200);
  });

  var video = $('.js-popup-video__video');
  popupVideo.on('click', function() {
    var this_ = $(this);
    this_.removeClass(OPEN);
    toggleSlider[0].noUiSlider.set(0);
  });

  // var videoBlock = $('.js-popup-video-wrap');
  // videoBlock.on('click', function(e) {
  //   e.stopPropagation();
  // });
  const tag = document.createElement('script');
  tag.src = '//www.youtube.com/iframe_api';
  $('body').append(tag);

  window.onYouTubeIframeAPIReady = () => {
    window.player = new YT.Player('Youtube', {
      events: {'onReady': onPlayerReady}
    });
  };
  function onPlayerReady(event) {
    document.querySelector('#pauseYoutube').addEventListener('click', function() {window.player.pauseVideo();});
  }
}

