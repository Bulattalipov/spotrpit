
$ (function (){

  $('.product__excerpt').on('click', function(){
    if ($(this).next().is(':visible')) {
      $(this).next().hide();
    } else {
      $(this).next().show();
    }
  });

  $('.header-top__items-btn').on('click', function () {
    $('.header').toggleClass('header--active');
  });

$('.basket-order__remove').on('click', function () {
  $(this).parent().parent().remove();
});
  

  var $range = $("#input");
  var $inputFrom = $("#input__from");
  var $inputTo = $("#input__to");
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });


 
  
  $(".star").rateYo({
    starWidth: "14px",
    ratedFill: "#ffde00",
    readOnly: true
  });

  $('.hit__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 700,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19"><path d="M401.98,1116a0.986,0.986,0,0,0,.735-0.32,1.151,1.151,0,0,0,0-1.56l-7.2-7.62,7.2-7.63a1.151,1.151,0,0,0,0-1.56,1,1,0,0,0-1.469,0l-7.931,8.41a1.141,1.141,0,0,0,0,1.55l7.931,8.41A0.984,0.984,0,0,0,401.98,1116Z" transform="translate(-393.031 -1097)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19"><path  d="M1512.02,1116a0.965,0.965,0,0,1-.73-0.32,1.143,1.143,0,0,1,0-1.56l7.19-7.62-7.19-7.63a1.143,1.143,0,0,1,0-1.56,0.987,0.987,0,0,1,1.46,0l7.93,8.41a1.13,1.13,0,0,1,0,1.55l-7.93,8.41A0.965,0.965,0,0,1,1512.02,1116Z" transform="translate(-1511 -1097)"/></svg></button>',
    responsive: [{
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });

  $('.top-slider__wrapper').slick({
    arrows: false,
    dots: true,
    fade: true
  });

  // $('.header-top__item-filter').click(function (e) {
  //   e.preventDefault();
  //   /* делаем чекбокс неактивным */
  //   $('input:checkbox').attr('disabled', true)
  //     /* обновляем состояние псевдочекбокса */
  //     .trigger('refresh');
  // });

  $('.catalog__boxSelect-select, .brands__select, .header-top__item-filter, .connection__select, .product-form__number-input, .product-form__taste-select, .basket-order__quantity-input, .manufacturers__select, .basket-delivery__select').styler();
});