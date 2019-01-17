import {OPEN, BODY, OVERFLOW_HIDDEN} from '../constants.js';

var burger = $('.js-toggle');
var burgerIcon = $('.js-toggle-icon');
var menu = $('.js-menu');
var header = $('.js-header');
var logo = $('.js-logo');

burger.on('click', function() {
  burgerIcon.toggleClass(OPEN);
  menu.toggleClass(OPEN);
  header.toggleClass(OPEN);
  BODY.toggleClass(OVERFLOW_HIDDEN);
});

// var header = $('.js-header');
// header.on('click', function(e) {
//   e.stopPropagation();
// });
