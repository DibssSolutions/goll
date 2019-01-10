import {OPEN} from '../constants';
var trigger = $('[data-modal-trigger]');
trigger.on('click', function(e) {
  e.preventDefault();
  var that = $(this);
  var id = that.data('modal-trigger');

  var modal = $(`[data-modal=${id}]`);
  modal.addClass(OPEN);
});

// var popup = $('[data-modal]');
// popup.on('click', function() {
//   $(this).removeClass(OPEN);
// });

