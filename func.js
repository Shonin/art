$(document).ready(function() {

  $("#img").rotate({
        angle:-90,
        center: ["50%", "0%"],
      });

  $(".enter").on("click", function() {
  
    var rotation = function (){
      $("#img").rotate({
        angle:-90,
        animateTo:90,
        duration:4000,
        center: ["50%", "0%"],
      });
    }
    rotation();

    setTimeout(function() {
      $(".enter").fadeOut();
      $("#img").fadeOut();
    }, 1000);
    
    setTimeout(function() {
      $(".content").fadeIn();
    }, 1500);

    // setTimeout(function() {
    //   $(".welcome").fadeOut();
    // }, 3500);
    
    setTimeout(function() {
      $(".art").fadeIn();
    }, 2000);

    setTimeout(function(){
        $('body').animate({
          backgroundColor: "#eee"
        }, 1000 );
},1700);

  }); // end on click
  
}); // end doc ready