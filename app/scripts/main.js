$(document).ready(function(){
  var header = $('.site-title');
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 300){
      header.addClass('scrolled');
    }else{
      header.removeClass('scrolled');
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
