new WOW().init();

$(document).ready(function () {
      $('#karuselmain').owlCarousel({
            items: 1,
            dots: true,
            responsiveClass: true,
            mouseDrag: true,
            autoplay: true,
            loop: true

      })
      $('#secondarykarusel').owlCarousel({
            items: 3,
            stagePadding: 0,
            loop: true,
            margin: 20,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
   
})
});

