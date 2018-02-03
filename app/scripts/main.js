$(document).ready(function(){
  var header = $('.site-title');

  /* Changes font-size & color on scroll */
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 300){
      header.addClass('scrolled');
    }else{
      header.removeClass('scrolled');
    }
  });/* End `Scroll` */

  /* Changes `Hamburger Menu` */
  $('.menu-btn').on('click', function(){
    if($('.menu-btn').hasClass('active')){
      $('.menu-btn').removeClass('active');
    }else{
      $('.menu-btn').addClass('active');
    }
  });/* End `Click` */
  
  $('.grid').isotope({
    itemSelector:'.grid-item',
  });
  $('.filter-button-group').on('click','li', function(){
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({filter:filterValue});
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });
});/* End `Ready` */
