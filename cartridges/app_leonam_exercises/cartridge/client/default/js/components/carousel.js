'use strict';

$(document).ready(function(){
  require('../../js/components/slick/slick/slick');
  $('.single-item').slick({
    settings: {
      Infinity: true,
      slidesToShow: 1,
      slidesToScroll: 1
    },

    asNavFor: '.responsive',
  });
});


$(document).ready(function(){
  require('../../js/components/slick/slick/slick');
  $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });    
  
});


 