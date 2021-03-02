$ (function (){
  
  $(".star").rateYo({
    starWidth: "40px"
  });

  $('.hit__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19"><path d="M401.98,1116a0.986,0.986,0,0,0,.735-0.32,1.151,1.151,0,0,0,0-1.56l-7.2-7.62,7.2-7.63a1.151,1.151,0,0,0,0-1.56,1,1,0,0,0-1.469,0l-7.931,8.41a1.141,1.141,0,0,0,0,1.55l7.931,8.41A0.984,0.984,0,0,0,401.98,1116Z" transform="translate(-393.031 -1097)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19"><path  d="M1512.02,1116a0.965,0.965,0,0,1-.73-0.32,1.143,1.143,0,0,1,0-1.56l7.19-7.62-7.19-7.63a1.143,1.143,0,0,1,0-1.56,0.987,0.987,0,0,1,1.46,0l7.93,8.41a1.13,1.13,0,0,1,0,1.55l-7.93,8.41A0.965,0.965,0,0,1,1512.02,1116Z" transform="translate(-1511 -1097)"/></svg></button>',
  });

  $('.top-slider__wrapper').slick({
    arrows: false,
    dots: true,
    fade: true,
  });

  // $('.header-top__item-filter').click(function (e) {
  //   e.preventDefault();
  //   /* делаем чекбокс неактивным */
  //   $('input:checkbox').attr('disabled', true)
  //     /* обновляем состояние псевдочекбокса */
  //     .trigger('refresh');
  // });

  $('.header-top__item-filter').styler();

  $('.connection__select').styler();


});