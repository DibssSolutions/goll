import {OPEN, OVERFLOW_HIDDEN, BODY} from '../constants';

var loginButton = $('.js-modal-btn');
var loginPopup = $('.js-login-popup');
loginButton.on('click', function(e) {
  e.preventDefault();
  loginPopup.addClass(OPEN);
  BODY.addClass(OVERFLOW_HIDDEN);
});

loginPopup.on('click', function() {
  var this_ = $(this);
  this_.removeClass(OPEN);
  BODY.removeClass(OVERFLOW_HIDDEN);
});

var form = $('.js-login-form');
form.on('click', function(e) {
  e.stopPropagation();
});

var closeForm = $('.js-button-close');
closeForm.on('click', function() {
  loginPopup.trigger('click');
});
