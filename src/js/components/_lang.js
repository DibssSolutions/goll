var lang = document.querySelector('.js-lang');
lang.onclick = function() {
  var list = document.querySelector('.js-lang__list');
  if (list.style.display === 'block') {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
};
