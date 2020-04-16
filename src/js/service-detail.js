$(document).ready(function () {
    $('.service-detail__portfolio-wrap').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    
                    

                }
            }
        ]
    });

    
    $('.service-detail__team-carousel').slick({
        arrows: true,
        dots: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // подстановка картинки в фон на мобилке
    let imgSrc = $('.page-title--service .page-title__img img').attr('src');
    
    if (window.innerWidth <= 992) {
        $('.page-title--service').css("background-image", "url(../" + imgSrc + ")");
    }

    $(window).resize(function() {
        if (window.innerWidth <= 992) {
            $('.page-title--service').css("background-image", "url(../" + imgSrc + ")");
        } else {
            $('.page-title--service').css("background-image", "");
        }
    })
    
});