$(document).ready(function () {
    window.onload = function () {
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

    $('.gallery ul li .img img').click(function () {
        var imgSrc = $(this).attr('src');
        $('.gallery ul li .img img.active').removeClass('active');
        $(this).addClass('active');
        $('.first-img img').attr('src', imgSrc);
    });

    $('.gallery-slide').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    $('.counter-box .plus').click(function () {
        count = parseInt($('.counter-box input:text').val());
        $('.counter-box input:text').val(count + 1);
    });

    $('.counter-box .minus').click(function () {
        count = parseInt($('.counter-box input:text').val());
        if (count == 1) {
            this.prop('disabled', true);
        }
        $('.counter-box input:text').val(count - 1);
    });

    $(".tabs li a").click(function() {
        // Active state for tabs
        $(".tabs li a").removeClass("active");
        $(this).addClass("active");

        // Active state for Tabs Content
        $(".tab_content_container > .tab_content_active")
            .removeClass("tab_content_active")
            .fadeOut(200);
        $(this.rel)
            .fadeIn(500)
            .addClass("tab_content_active");
    });

    $('.modal-toggle').on('click', function(e) {
        e.preventDefault();
        $('.modal').toggleClass('is-visible');
    });

});
