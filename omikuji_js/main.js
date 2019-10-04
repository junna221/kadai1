$(function(){
  $('.sub').hide();
  $('.menu>li').hover(
    function(){
      $('ul', this).slideDown(400);
    },
    function(){
      $('ul', this).hide();
  });
});