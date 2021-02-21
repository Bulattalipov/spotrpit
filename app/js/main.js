$ (function (){
  

  $('.header-top__item-filter').click(function (e) {
    e.preventDefault();
    /* делаем чекбокс неактивным */
    $('input:checkbox').attr('disabled', true)
      /* обновляем состояние псевдочекбокса */
      .trigger('refresh');
  });

  $('.header-top__item-filter').styler();

});