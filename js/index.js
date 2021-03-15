$(document).ready(function() {
  $('.grid').masonry({
// options
    itemSelector: '.grid-item',
    columnWidth: 200,
  });

  $( ".burger-menu" ).click(function() {
    $(".main-menu").addClass("active");
  });

  $( ".close-menu" ).click(function() {
    $(".main-menu").removeClass("active");
  });

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    // rtl:true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows:true,
        }
      },
    ]
  });


  $('.slide-left').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    // rtl:true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
        }
      }
    ]
  });

  $('.slide-blog').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    // rtl: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
        }
      },

    ]
  });

  $('.slide-services-mob').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // rtl:true,
    responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
//moveDown
  $('.moveDown').on('click', function (e) {
    e.preventDefault();

    var offset = $(".section2").offset().top;
    $('html, body').stop().animate({
      scrollTop: offset
    }, 400);
  });
});
