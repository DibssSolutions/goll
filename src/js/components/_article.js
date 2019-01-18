import {ACTIVE} from '../constants.js';

var arrBtn = $('.js-button-arrow');
var drop = $('.js-drop-text');

arrBtn.on('click', function() {
  var this_ = $(this);
  drop.slideToggle('300');
  this_.toggleClass(ACTIVE);
});
