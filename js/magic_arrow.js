$(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#magicArrow').fadeIn();
  } else {
  $('#magicArrow').fadeOut();
  }
  });
  $('#magicArrow').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
  });