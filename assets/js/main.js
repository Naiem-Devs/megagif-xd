(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".Restaurant__slider").owlCarousel({
    loop: true,
    stagePadding: 50,
    margin: 15,
    items: 1,
    navText: [
      '<i><img src="assets/img/Repeat-left-arrow.svg" alt=""></i>',
      '<i><img src="assets/img/Repeat-right-arrow.svg" alt=""></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        stagePadding: 50
      },
      450: {
        stagePadding: 50
      },
      555: {
        stagePadding: 120
      },
      650: {
        items: 2,
        stagePadding: 80
      },
      767: {
        margin: 30,
        stagePadding: 100
      }
    }
  });


  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
