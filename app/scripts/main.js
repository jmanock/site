$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);
    if(scrollTop >= 400){
      $('#global-nav').addClass('scrolled-nav');
    }else if(scrollTop < 400){
      $('#global-nav').removeClass('scrolled-nav');
    }
  });
  $('.menu-btn').on('click', function(){
    if($('.menu-btn').hasClass('active')){
      $('.menu-btn').removeClass('active');
    }else{
      $('.menu-btn').addClass('active');
    }
  });
});
