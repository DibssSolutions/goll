import {ACTIVE} from '../constants.js';

var dropParent = $('.js-drop-parent');


dropParent.each(function() {
  var arrBtn = $(this).find('.js-button-arrow');
  var drop = $(this).find('.js-drop-text');
  arrBtn.on('click', function() {
    drop.slideToggle('300');
    arrBtn.toggleClass(ACTIVE);
  });
});
