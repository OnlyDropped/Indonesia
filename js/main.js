  $(".fa-search").click(function(){
    $(".header-nav__form, .header-nav__input").toggleClass("active");
    $("input[type='search']").focus();
  });


  $('.header-nav__btn').click(function () {
    $(".header-nav__list").toggleClass("active");
  });