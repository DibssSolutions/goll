import {OPEN, OVERFLOW_HIDDEN, BODY} from '../constants';

var trigger = $('[data-modal-trigger]');
trigger.on('click', function(e) {
  e.preventDefault();
  var that = $(this);
  var id = that.data('modal-trigger');
  var modal = $(`[data-modal=${id}]`);
  modal.addClass(OPEN);
  BODY.addClass(OVERFLOW_HIDDEN);
});

var popup = $('[data-modal]');
popup.on('click', function(e) {						// событие клика по блоку с атрибутом [data-modal]
  var block = $('.js-popup-wrap');					// элемент к которому применяем условие
  if (!block.is(e.target)									// проверка условия если клик был не по нашему блоку
  	&& block.has(e.target).length === 0) {// проверка условия если клик не по его дочерним элементам
  	$(this).removeClass(OPEN);						// усли условия выполняются 	 убираеться класс is-open
    BODY.removeClass(OVERFLOW_HIDDEN);
  }
});

var close = $('.js-specialization-popup-button');
close.on('click', function() {
  popup.trigger('click');
});


$('[data-modal]').each(function() {
  var this_ = $(this);
  var itemLength = this_.find('.features').length;
  this_.attr('data-length-features', itemLength);
});
