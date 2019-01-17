import {OPEN, BODY} from '../constants.js';

var burger = $('.js-toggle');
var burgerIcon = $('.js-toggle-icon');
var menu = $('.js-menu');
burger.on('click', function() {
  burgerIcon.toggleClass(OPEN);
  menu.toggleClass(OPEN);
});

BODY.on('click', function() {
  menu.removeClass(OPEN);
  burgerIcon.removeClass(OPEN);
});

var header = $('.js-header');
header.on('click', function(e) {
  e.stopPropagation();
});
