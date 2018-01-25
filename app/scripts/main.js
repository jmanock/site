$(document).ready(function(){
  
  $('.menu-btn').on('click', function(){
    if($('.menu-btn').hasClass('active')){
      $('.menu-btn').removeClass('active');
    }else{
      $('.menu-btn').addClass('active');
    }
  });
});
