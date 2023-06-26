var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  effect: "fade",
});

function paddingOfContentCalculate(contentClass, imageClass) {
  $(contentClass).css('padding-left', $(imageClass).css('width') * 84 / 100);
}

$(document).ready(function() {
  if ($(window).width>=1200) {
    paddingOfContentCalculate('.slide-content', '.slide-image');
    $(window).resize(function() {
        paddingOfContentCalculate('.slide-content', '.slide-image');
    });
  }
});
