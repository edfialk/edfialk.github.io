/* eslint-env jquery, browser */
(function() {
  'use strict';

  let $d = $(document);
  let $body = $('body');
  $d.on('click', 'a[data-target]', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'data-target')).offset().top
    }, 500);
  });
  $d.on('click', '.modal-link', function(e) {
    e.preventDefault();
    $body.toggleClass('modal-active');
  });
  $d.on('click', '.modal-overlay', function(e) {
    if (e.target.classList.contains('modal-overlay')){
      $body.removeClass('modal-active');
    }
  });
})();

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
