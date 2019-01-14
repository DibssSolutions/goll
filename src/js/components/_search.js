var icon = $('.js-search-icon');
icon.on('click', function(e) {
  e.preventDefault();
  var input = $('.js-search-input');
  input.toggleClass('search__input_open');
});

var out = $('.out');
out.on('click', function(e) {
  var input = $('.js-search-input');
  var form = $('.search__form');
  if (!form.is(e.target) && form.has(e.target).length === 0) {
    input.removeClass('search__input_open');
  }
});
