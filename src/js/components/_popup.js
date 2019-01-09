var trigger = $('[data-modal-trigger]');
var data = (trigger.attr('data-modal-trigger'));
console.log(data);
var target = $('[data-modal]');
console.log(target);

if (target.attr('[data-modal]') == data) {
}

$(data).addClass('is-open');


