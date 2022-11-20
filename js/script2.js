$(document).ready(function(){

    $(window).scroll(function(){
        $('#topBtn').fadeIn();
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
  });