$(document).ready(function(){
  var header = $('.site-title');

  // Changes font size and color on scroll
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 300){
      header.addClass('scrolled');
    }else{
      header.removeClass('scrolled');
    }
  });

  // Changes hamburger menu button on click
  $('.menu-btn').on('click', function(){
    if($('.menu-btn').hasClass('active')){
      $('.menu-btn').removeClass('active');
    }else{
      $('.menu-btn').addClass('active');
    }
  });

  // Need to add buttons for the portfolio
  // Idea would be Apps Website and All
  $('.pButton').on('click', function(){
    if($(this).val === ('Website')){
      // Show Websites only
    }else if($(this).val === ('Apps')){
      // Show Apps only
    }else{
      // Show All
    }
  });
});
