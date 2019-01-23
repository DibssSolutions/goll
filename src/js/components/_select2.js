import select2 from 'select2';

var select = $('.js-select');

select.select2({
  minimumResultsForSearch: Infinity,
  dropdownParent: $('.request__dropdown')
});

var selectNews = $('.js-select-news');

selectNews.select2({
  minimumResultsForSearch: Infinity,
  dropdownParent: $('.news__dropdown'),
  placeholder: 'Новости по всем направлениям'
});
