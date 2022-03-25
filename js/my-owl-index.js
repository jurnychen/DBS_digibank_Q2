var checkImgs = [];
$(function () {
  let $window = $(window);
  let hasSetGoSection = false;

  $('.owl-index').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    slideSpeed: 20000,
    // URLhashListener: true,
    // startPosition: 'URLHash',
    lazyLoad: false,
    // center: true,
    // nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        center: true,
      },
      768: {
        items: 1,
        stagePadding: 0,
      },
    },
  });

  
});
