import {OPEN, BODY} from '../constants.js';

var icon = $('.js-search-icon');
icon.on('click', function(e) {
  e.preventDefault();
  var input = $('.js-search-input');
  input.toggleClass(OPEN);
});

BODY.on('click', function(e) {
  var input = $('.js-search-input');
  var form = $('.js-search-form');
  if (!form.is(e.target) && form.has(e.target).length === 0) {
    input.removeClass(OPEN);
  }
});
