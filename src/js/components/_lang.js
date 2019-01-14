var lang = document.querySelector('.js-lang');
var list = document.querySelector('.js-lang__list');
lang.onclick = function(e) {
  e.preventDefault();
  if (list.style.display === 'block') {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
};

var lang2 = $('.js-lang');
var list2 = $('.js-lang__list');
var out2 = $('.out');
out2.on('click', function(e) {
  if (!lang2.is(e.target) 
  	&& lang2.has(e.target).length === 0) {
    list2.css('display','none');
  }
});
