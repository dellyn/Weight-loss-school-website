//qwerty
$(document).ready(function() {

  $('.container').on("click", '.modal__close', function (e) {
    e.preventDefault();
      $('.modal').removeClass('modal--active');
    $('body').removeClass('hidden-scroll');
  });

  $('.container').on("click", '.author__more', function (e) {
    e.preventDefault();
    $('#bolbat').addClass('modal--active');
    $('body').addClass('hidden-scroll');
  });

  $('.container').on("click", '.info', function (e) {
    e.preventDefault();
    $('#info').addClass('modal--active');
    $('body').addClass('hidden-scroll');
  });

  $('.container').on("click", '.form-modal__close', function (e) {
    e.preventDefault();
    $('.form-modal').removeClass('form-modal--active');
    $('body').removeClass('hidden-scroll');
  });

  $('.container').on("click", '.first-screen__button', function (e) {
    e.preventDefault();
    $('.form-modal--first').addClass('form-modal--active');
    $('body').addClass('hidden-scroll');
  });

  $('.container').on("click", '.programm .button', function (e) {
    e.preventDefault();
    $('.form-modal--game').addClass('form-modal--active');
    $('body').addClass('hidden-scroll');
  });

  $('#pop_author1').on("click", function (e) {
    e.preventDefault();

    $(".pop_author11").fadeIn()
    $(".pop_layout").fadeIn()
    $('body').addClass('hidden-scroll');
  });
  $('#pop_author2').on("click", function (e) {
    e.preventDefault();

    $(".pop_author22").fadeIn()
    $(".pop_layout").fadeIn()
    $('body').addClass('hidden-scroll');
  });
  $('#pop_author3').on("click", function (e) {
    e.preventDefault();

    $(".pop_author33").fadeIn()
    $(".pop_layout").fadeIn()
    $('body').addClass('hidden-scroll');
  });
  $('#pop_author4').on("click", function (e) {
    e.preventDefault();

    $(".pop_author44").fadeIn()
    $(".pop_layout").fadeIn()
    $('body').addClass('hidden-scroll');
  });


  $('.pop_close').on("click", function (e) {
    e.preventDefault();
    $( ".pop_author" ).hide(100);
    $( ".pop_layout" ).hide(100);
    $('body').removeClass('hidden-scroll');

  });
  $('.pop_layout').on("click", function (e) {
    e.preventDefault();
    $( ".pop_author" ).hide(100);
    $( this ).hide(100);
    $('body').removeClass('hidden-scroll');

  });







});
//qwerty1