import {OPEN} from '../constants.js';

var arrBtn = $('.js-button-arrow');
var article = $('.js-article');

arrBtn.on('click', function() {
  var this_ = $(this);
  article.css('max-height', 'none');
  this_.css('background-image', "url('../img/arr-up.svg')");
});
