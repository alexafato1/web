

  function carouselFn(){
    if ($(window).width() < 550){
       $(".owl-carousel").owlCarousel({
   
        items:1,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000
        });
     }
     else if ($(window).width() < 770){
      $(".owl-carousel").owlCarousel({
  
       items:2,
       margin:10,
       loop:true,
       autoplay:true,
       autoplayTimeout:4000
       });
    }
     else{
      $(".owl-carousel").owlCarousel({
   
       items:3,
       margin:15,
       loop:true,
       autoplay:true,
       autoplayTimeout:4000
      });
     }
    };
   
    $(document).ready(function() {
        carouselFn();
   });
   $(window).resize(function(){
        carouselFn();     
    });