$(document).ready(function() {
  'use strict';


  $("#gotop").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 800);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#gotop').fadeIn("fast");
      $('#gotop').css('display','flex');
    } else {
      $('#gotop').stop().fadeOut("fast");
    }
  });

  $('.readMore').each(function() {
        $(this).click(function() {
            $(this).parents('ol').find('.hideTxt').show();
            $(this).hide();
        });
    });

});
