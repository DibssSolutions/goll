import {OPEN, BODY} from '../constants.js';

var lang = $('.js-lang');
var list = $('.js-lang__list');

lang.on('click', function(e) {
  e.preventDefault();
  list.toggleClass(OPEN);
});

BODY.on('click', function(e) {
  if (!lang.is(e.target) 
  	&& lang.has(e.target).length === 0) {
    list.removeClass(OPEN);
  }
});

