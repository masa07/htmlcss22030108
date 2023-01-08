jQuery(function ($) {
  $('.header-button').on('click', function () {
    $('body').toggleClass('open');
  });
  // $('.gallery').each(function () {
  //   $(this).modaal({
  //     type: 'image'
  //   });
  // });
  $('.gallery').modaal({
    type: 'image'
  });

});
