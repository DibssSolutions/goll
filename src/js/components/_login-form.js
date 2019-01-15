import {OPEN} from '../constants';

var loginButton = $('.js-modal-btn');
var loginPopup = $('.js-login-popup');
loginButton.on('click', function(e) {
  e.preventDefault();
  loginPopup.addClass(OPEN);
});

loginPopup.on('click', function() {
  var this_ = $(this);
  this_.removeClass(OPEN);
});

var form = $('.js-login-form');
form.on('click', function(e) {
  e.stopPropagation();
});

var closeForm = $('.js-button-close');
closeForm.on('click', function() {
  loginPopup.trigger('click');
});
