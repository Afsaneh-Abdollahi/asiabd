$(document).ready(function() {
    window.onload=function() {
        $('.main-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            rtl: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
    $('.category-slide').slick({
        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
