


$(document).ready(function(){
    require('../../js/components/slick/slick/slick');
    $('.homepage-product-listing').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        
        
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
    });    
    
  });
