$(document).ready(function(){
  $('#header a').click(function(e){
    e.preventDefault();
    $('#navigation').toggle();
    $('.nav-active').slideToggle();
    });
});
